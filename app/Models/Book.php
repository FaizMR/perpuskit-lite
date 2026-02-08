<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;



class Book extends Model
{
    use HasFactory;
    protected $table = 'books';
    protected $fillable = [
        'judul',
        'penulis',
        'penerbit',
        'tanggal_terbit',
        'category_id',
        'isbn',
        'jumlah_halaman',
        'deskripsi',
    ];

    public function scopeSearch($query, $search, $column = null)
    {
        if (!$search) return $query;

        if ($column && in_array($column, ['judul', 'penulis', 'penerbit'])) {
            return $query->where($column, 'like', "%{$search}%");
        } elseif ($column == 'tanggal_penerbit') {
            return $query->whereRaw(
                "DATE_FORMAT(tanggal_terbit, '%Y-%m-%d') LIKE ?",
                ["%{$search}%"]
            );
        }

        return $query
            ->whereHas('category', fn($q) => $q->where('name', 'like', "%{$search}%"))
            ->orWhere('judul', 'like', "%{$search}%")
            ->orWhere('penulis', 'like', "%{$search}%")
            ->orWhere('penerbit', 'like', "%{$search}%")
            ->orWhere('tanggal_terbit', 'like', "%{$search}%")
            ->orWhereRaw(
                "DATE_FORMAT(tanggal_terbit, '%d %M %Y') LIKE ? ",
                "%{$search}%"
            );;
    }

    public function scopeSort($query, $column, $order)
    {
        if ($column && $order) {
            return $query->orderBy($column, $order);
        }

        return $query->latest();
    }

    public function scopeCategory($query, $request)
    {
        if ($request->category) {
            $query->whereHas('category', function ($q) use ($request) {
                $q->where('name', $request->category);
            });
        }
    }
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function loans()
    {
        return $this->hasMany(Loan::class);
    }
}
