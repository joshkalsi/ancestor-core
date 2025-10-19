<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProgressController;
use App\Http\Controllers\StageController;
use App\Http\Controllers\UnitController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::get('progress-tracker', [ProgressController::class, 'index'])->name('progress');

    Route::resource('units', UnitController::class);
    Route::put('stages/update-order', [StageController::class, 'updateOrder']);
    Route::resource('stages', StageController::class);
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
