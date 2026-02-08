<?php

use App\Enums\LevelUser;
use App\Http\Controllers\Admin\BookController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Anggota\BookLoanController;
use App\Http\Controllers\Anggota\MyrequestController;
use App\Http\Controllers\petugas\LoanRequestController;
use App\Http\Controllers\Petugas\LoanStatusController;
use App\Http\Controllers\PreviewController;
use App\Http\Controllers\SelectCategory;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');
Route::get('/upgrade', function () {
    return Inertia::render('Upgrade');
})->name('upgrade');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        $user = Auth::user();

        return $user->level->getDashboardPage();
    })->name('dashboard');
});
Route::group(['middleware' => ['auth', 'verified']], function () {
    Route::get('/preview/{path}', [PreviewController::class, 'show'])->where('path', '.*');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Gate::define('admin', function ($user) {
        return $user->level === LevelUser::ADMIN;
    });
    Gate::define('anggota', function ($user) {
        return $user->level === LevelUser::ANGGOTA;
    });
    Gate::define('petugas', function ($user) {
        return $user->level === LevelUser::PETUGAS;
    });
    Gate::define('petugasadmin', function ($user) {
        return in_array($user->level, [
            LevelUser::ADMIN,
            LevelUser::PETUGAS
        ]);
    });

    Route::get('/api/categories', [SelectCategory::class, 'index']);
    Route::put('/users/{user}/reset-password', [UserController::class, 'resetPassword'])->name('users.resetPassword');

    Route::group(['middleware' => ['auth', 'verified', 'can:admin']], function () {
        Route::resource('users', UserController::class);
    });
    Route::group(['middleware' => ['auth', 'verified', 'can:anggota']], function () {
        Route::resource('peminjamanbukus', BookLoanController::class);
        Route::resource('pengajuananggotas', MyrequestController::class);
    });
    Route::group(['middleware' => ['auth', 'verified', 'can:petugasadmin']], function () {
        Route::resource('pengajuanpeminjamans', LoanRequestController::class);
        Route::resource('statuspeminjamans', LoanStatusController::class);
        Route::resource('categories', CategoryController::class);
        Route::resource('databukus', BookController::class);
    });
});

require __DIR__ . '/settings.php';
