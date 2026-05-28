import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { formatPercent, toSafeArray } from '@/lib/safe-data';
import type { CtaAnalysisProps } from '@/types/analytics';
import { MousePointerClick } from 'lucide-react';

export function CtaAnalysis({ data }: CtaAnalysisProps) {
    const safeData = toSafeArray(data);

    if (safeData.length === 0) {
        return (
            <Card className="py-12 text-center">
                <CardContent>
                    <MousePointerClick className="mx-auto mb-4 h-10 w-10 text-slate-400" />
                    <p className="text-slate-500">No CTA performance data available</p>
                </CardContent>
            </Card>
        );
    }

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-3">
                <MousePointerClick className="h-5 w-5 text-blue-600" />
                <div>
                    <h2 className="text-xl font-semibold text-slate-900">CTA Performance</h2>
                    <p className="text-sm text-slate-500">Click-through rates by location</p>
                </div>
            </div>

            {safeData.map((row) => (
                <Card key={row.landing_source}>
                    <CardHeader>
                        <CardTitle className="text-sm">{row.landing_source}</CardTitle>
                        <CardDescription>{row.total_clicks} total clicks</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            {toSafeArray(row.cta_locations).map((loc) => (
                                <div
                                    key={loc.location}
                                    className="flex items-center justify-between rounded-md border border-slate-100 bg-slate-50 px-3 py-2"
                                >
                                    <div>
                                        <p className="text-sm font-medium text-slate-800">{loc.location}</p>
                                        <p className="text-xs text-slate-500">{loc.click_count} clicks</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Badge variant={loc.lead_rate > 0.1 ? 'success' : 'secondary'}>
                                            {formatPercent(loc.lead_rate)} leads
                                        </Badge>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
