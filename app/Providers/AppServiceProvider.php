<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Gate untuk fitur Full-only
        Gate::define('full-feature', function ($user) {
            return $user->isFull();
        });

        // Gate untuk check limit buku
        Gate::define('can-create-book', function ($user) {
            if ($user->isFull()) {
                return true;
            }
            return \App\Models\Book::count() < 20;
        });

        // Gate untuk check limit user
        Gate::define('can-create-user', function ($user) {
            if ($user->isFull()) {
                return true;
            }
            return \App\Models\User::count() < 5;
        });

        // Gate untuk check limit pengajuan peminjaman
        Gate::define('can-create-loan', function ($user) {
            if ($user->isFull()) {
                return true;
            }
            return \App\Models\Loan::where('user_id', $user->id)->count() < 1;
        });
        if (app()->environment('production')) {
            \Illuminate\Support\Facades\URL::forceScheme('https');
        }
    }
}
