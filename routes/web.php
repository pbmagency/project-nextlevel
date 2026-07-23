<?php

use App\Http\Controllers\AnalyticsController;
use App\Http\Controllers\LabsController;
use Illuminate\Support\Facades\Route;
// ── Public landing page ───────────────────────────────────────────────────────
Route::inertia('/', 'landing')->name('home');
Route::inertia('/c1-angle', 'cycle1/c1-angle')->name('home2');
Route::inertia('/c2-hero', 'cycle2/c2-hero')->name('home3');
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

require __DIR__ . '/auth.php';
