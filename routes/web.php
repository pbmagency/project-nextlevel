<?php

use App\Http\Controllers\AnalyticsController;
use App\Http\Controllers\LabsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// ── Public landing page ───────────────────────────────────────────────────────
Route::get('/', function () {
    return Inertia::render('landing')->clearHistory();
})->name('home');

// ── Analytics tracking endpoint (public, uses session CSRF) ──────────────────
Route::post('/analytics/track', [AnalyticsController::class, 'track'])->name('analytics.track');

// ── Dashboard redirect (required by guest middleware) ─────────────────────────
Route::get('/dashboard', fn() => redirect('/admin'))->middleware(['auth', 'verified'])->name('dashboard');

// ── Admin routes ──────────────────────────────────────────────────────────────
Route::middleware(['auth', 'verified', 'admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/', [AnalyticsController::class, 'index'])->name('analytics');
    Route::get('/export', [AnalyticsController::class, 'export'])->name('analytics.export');

    Route::get('/labs', [LabsController::class, 'index'])->name('labs');
    Route::post('/labs/clear-cache', [LabsController::class, 'clearCache'])->name('labs.clear-cache');
});

require __DIR__.'/auth.php';
