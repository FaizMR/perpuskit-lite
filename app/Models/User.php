<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use App\Enums\LevelUser;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, TwoFactorAuthenticatable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $table = 'users';
    protected $fillable = [
        'nik',
        'name',
        'email',
        'password',
        'profile_user',
        'no_hp',
        'plan',
        'level'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'two_factor_secret',
        'two_factor_recovery_codes',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'two_factor_confirmed_at' => 'datetime',
            'level' => LevelUser::class,
        ];
    }

    /**
     * Check if user is on Lite plan
     */
    public function isLite(): bool
    {
        return $this->plan === 'lite';
    }

    /**
     * Check if user is on Full plan
     */
    public function isFull(): bool
    {
        return $this->plan === 'full';
    }

    public function scopeSearch($query, $search, $column = null)
    {
        if (!$search) return $query;

        return $query->where(function ($q) use ($search, $column) {
            if ($column && in_array($column, ['name', 'nik', 'email', 'no_hp'])) {
                $q->where($column, 'like', "%{$search}%");
            } else {
                $q->where('name', 'like', "%{$search}%")
                    ->orWhere('nik', 'like', "%{$search}%")
                    ->orWhere('email', 'like', "%{$search}%")
                    ->orWhere('no_hp', 'like', "%{$search}%")
                    ->orWhere('level', 'like', "%{$search}%");
            }
        });
    }

    public function scopeFilterLevel($query, $level)
    {
        if ($level) {
            $query->where('level', $level);
        }

        return $query;
    }

    public function scopeSort($query, $column, $order)
    {
        if ($column && $order) {
            return $query->orderBy($column, $order);
        }

        return $query->latest();
    }

    public function loans()
    {
        return $this->hasMany(Loan::class);
    }
}
