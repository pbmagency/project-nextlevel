<?php

namespace App\Http\Controllers;

use App\Models\UserAnalytic;
use App\Services\MetaConversionService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class AnalyticsController extends Controller
{
    public function index(Request $request)
    {
        $dateRange = $request->get('range', '30'); // days
        $startDate = Carbon::now()->subDays($dateRange);

        $stats = $this->getAnalyticsStats($startDate);
        $chartData = $this->getChartData($startDate);
        $referralData = $this->getReferralData($startDate);
        $conversionFunnel = $this->getConversionFunnel($startDate);

        return Inertia::render('admin/analytics', [
            'stats' => $stats,
            'chartData' => $chartData,
            'referralData' => $referralData,
            'conversionFunnel' => $conversionFunnel,
            'dateRange' => $dateRange,
        ]);
    }

    public function track(Request $request, MetaConversionService $metaService)
    {
        // Debug request
        Log::info('Analytics Request:', $request->all());

        $sessionId = $request->session()->getId();
        $ipHash = hash('sha256', $request->ip() . config('app.key'));

        UserAnalytic::create([
            'session_id' => $sessionId,
            'event_type' => $request->input('event_type'),
            'event_data' => $request->input('event_data') ?? [],
            'referral_source' => $request->input('referral_source'),
            'utm_source' => $request->input('utm_source'),
            'utm_medium' => $request->input('utm_medium'),
            'utm_campaign' => $request->input('utm_campaign'),
            'utm_content' => $request->input('utm_content'),
            'utm_term' => $request->input('utm_term'),
            'ip_hash' => $ipHash,
            'user_agent' => $request->userAgent(),
            'user_id' => $request->user()?->id,
            'created_at' => now(),

        ]);

        // Send server-side events to Meta Conversions API
        $eventId = $request->input('event_data.event_id');
        $eventType = $request->input('event_type');

        if ($eventId) {
            if ($eventType === 'visit') {
                $metaService->sendPageView($request, $eventId);
            }

            $metaEvent = $request->input('event_data.meta_event');

            if ($eventType === 'lead' && $metaEvent === 'AddToCart') {
                $metaService->sendAddToCart($request, $eventId);
            }

            if ($eventType === 'lead' && $metaEvent === 'Purchase') {
                $amount   = (float) ($request->input('event_data.amount') ?? 0);
                $currency = $request->input('event_data.currency', 'IDR');
                $metaService->sendPurchase($request, $eventId, $amount, $currency);
            }
        }

        return response()->json(['success' => true]);
    }

    private function getAnalyticsStats($startDate)
    {
        $totalVisits = UserAnalytic::where('event_type', 'visit')
            ->where('created_at', '>=', $startDate)
            ->count();

        $uniqueVisitors = UserAnalytic::where('event_type', 'visit')
            ->where('created_at', '>=', $startDate)
            ->distinct('session_id')
            ->count();

        // Engaged = sessions with BOTH 15+ sec dwell AND >25% scroll depth
        $dwellSessions = UserAnalytic::where('event_type', 'engagement')
            ->where('created_at', '>=', $startDate)
            ->where('event_data->type', 'dwell_ping')
            ->distinct()
            ->pluck('session_id');

        $scrollSessions = UserAnalytic::where('event_type', 'scroll')
            ->where('created_at', '>=', $startDate)
            ->whereRaw("CAST(json_extract(event_data, '$.depth') AS DECIMAL(10,2)) >= 25")
            ->distinct()
            ->pluck('session_id');

        $engagementUsers = $dwellSessions->intersect($scrollSessions)->unique()->count();

        $initiateCheckoutCount = UserAnalytic::where('event_type', 'initiate_checkout')
            ->where('created_at', '>=', $startDate)
            ->distinct('session_id')
            ->count();

        $leads = UserAnalytic::where('event_type', 'lead')
            ->where('created_at', '>=', $startDate)
            ->distinct('session_id')
            ->count();

        $paymentAnalytics = UserAnalytic::where('event_type', 'payment')
            ->where('created_at', '>=', $startDate)
            ->where('event_data->status', 'success')
            ->get();

        $payments = $paymentAnalytics->count();

        $revenue = $paymentAnalytics->sum(function ($analytic) {
            return (float) ($analytic->event_data['amount'] ?? 0);
        });

        return [
            'total_visits' => $totalVisits,
            'unique_visitors' => $uniqueVisitors,

            'engagement_rate' => $uniqueVisitors > 0
                ? round(($engagementUsers / $uniqueVisitors) * 100, 2)
                : 0,
            'engaged_users' => $engagementUsers,

            'initiate_checkout_rate' => $engagementUsers > 0
                ? round(($initiateCheckoutCount / $engagementUsers) * 100, 2)
                : 0,
            'initiate_checkout_count' => $initiateCheckoutCount,

            'lead_rate' => $initiateCheckoutCount > 0
                ? round(($leads / $initiateCheckoutCount) * 100, 2)
                : 0,
            'leads' => $leads,

            'conversion_to_payment_rate' => $leads > 0
                ? round(($payments / $leads) * 100, 2)
                : 0,

            'payment_rate' => $totalVisits > 0
                ? round(($payments / $totalVisits) * 100, 2)
                : 0,

            'total_revenue' => $revenue,
            'payments' => $payments,
        ];
    }

    private function getChartData($startDate)
    {
        return UserAnalytic::select(
            DB::raw('DATE(created_at) as date'),
            DB::raw('COUNT(*) as total'),
            'event_type'
        )
            ->where('created_at', '>=', $startDate)
            ->whereIn('event_type', ['visit', 'engagement', 'initiate_checkout', 'lead', 'payment'])
            ->groupBy(['date', 'event_type'])
            ->orderBy('date')
            ->get()
            ->groupBy('event_type');
    }

    private function getReferralData($startDate)
    {
        return UserAnalytic::select('referral_source', DB::raw('COUNT(*) as count'))
            ->where('event_type', 'visit')
            ->where('created_at', '>=', $startDate)
            ->whereNotNull('referral_source')
            ->groupBy('referral_source')
            ->orderByDesc('count')
            ->limit(10)
            ->get();
    }

    private function getConversionFunnel($startDate)
    {
        $visits = UserAnalytic::where('event_type', 'visit')
            ->where('created_at', '>=', $startDate)
            ->distinct('session_id')
            ->count();

        // Engaged = sessions with BOTH 15+ sec dwell AND >25% scroll depth
        $dwellSessions = UserAnalytic::where('event_type', 'engagement')
            ->where('created_at', '>=', $startDate)
            ->where('event_data->type', 'dwell_ping')
            ->distinct()
            ->pluck('session_id');

        $scrollSessions = UserAnalytic::where('event_type', 'scroll')
            ->where('created_at', '>=', $startDate)
            ->whereRaw("CAST(json_extract(event_data, '$.depth') AS DECIMAL(10,2)) >= 25")
            ->distinct()
            ->pluck('session_id');

        $engaged = $dwellSessions->intersect($scrollSessions)->unique()->count();

        $initiateCheckout = UserAnalytic::where('event_type', 'initiate_checkout')
            ->where('created_at', '>=', $startDate)
            ->distinct('session_id')
            ->count();

        $leads = UserAnalytic::where('event_type', 'lead')
            ->where('created_at', '>=', $startDate)
            ->distinct('session_id')
            ->count();

        $payments = UserAnalytic::where('event_type', 'payment')
            ->where('created_at', '>=', $startDate)
            ->where('event_data->status', 'success')
            ->distinct('session_id')
            ->count();

        return [
            ['stage' => 'Visits', 'count' => $visits, 'percentage' => 100],
            ['stage' => 'Engaged', 'count' => $engaged, 'percentage' => $visits > 0 ? round(($engaged / $visits) * 100, 1) : 0],
            ['stage' => 'Initiate Checkout', 'count' => $initiateCheckout, 'percentage' => $visits > 0 ? round(($initiateCheckout / $visits) * 100, 1) : 0],
            ['stage' => 'Leads', 'count' => $leads, 'percentage' => $visits > 0 ? round(($leads / $visits) * 100, 1) : 0],
            ['stage' => 'Paid', 'count' => $payments, 'percentage' => $visits > 0 ? round(($payments / $visits) * 100, 1) : 0],
        ];
    }

    public function export(Request $request)
    {
        $dateRange = $request->get('range', '30');
        $startDate = Carbon::now()->subDays($dateRange);

        $data = UserAnalytic::where('created_at', '>=', $startDate)
            ->orderBy('created_at', 'desc')
            ->get();

        $headers = [
            'Content-Type' => 'text/csv',
            'Content-Disposition' => 'attachment; filename="analytics-export.csv"',
        ];

        $callback = function () use ($data) {
            $file = fopen('php://output', 'w');
            fputcsv($file, ['Date', 'Event Type', 'Referral Source', 'Event Data', 'User ID']);

            foreach ($data as $row) {
                fputcsv($file, [
                    $row->created_at->format('Y-m-d H:i:s'),
                    $row->event_type,
                    $row->referral_source,
                    json_encode($row->event_data),
                    $row->user_id,
                ]);
            }
            fclose($file);
        };

        return response()->stream($callback, 200, $headers);
    }
}
