<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Category extends Model
{
    use HasFactory;
    protected $table = 'categories';
    protected $fillable = ['name'];

    public function scopesearch($query, $search)
    {
        if ($search) {
            $query->where('name', 'like', $search);
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

    public function books()
    {
        return $this->hasMany(Book::class);
    }
}
