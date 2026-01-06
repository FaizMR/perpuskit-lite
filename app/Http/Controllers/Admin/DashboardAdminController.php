<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Book;
use App\Models\Loan;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class DashboardAdminController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Dashboard', [
            'peminjaman' => [
                'dipinjam' => Loan::whereStatus('dipinjam')->count(),
                'dikembalikan' => Loan::whereStatus('dikembalikan')->count(),
                'terlambat' => Loan::whereStatus('terlambat')->count(),
                'rusak_hilang' => Loan::whereIn('status', ['rusak', 'hilang'])->count(),
            ],
            'buku' => [
                'total' => Book::count(),
                'paling_sering_dipinjam' => $this->mostBorrowedBook(),
            ],
            'pengguna' => [
                'total' => User::whereIn('level', ['anggota', 'petugas'])->count(),
                'petugas' => User::where('level', 'petugas')->count(),
                'anggota' => User::where('level', 'anggota')->count(),
            ],
            'recentTransactions' => $this->todayTransactions(),
            'topDenda' => $this->topDenda(),
        ]);
    }
    private function mostBorrowedBook()
    {
        return Loan::select(
            'books.id',
            'books.judul',
            DB::raw('COUNT(loans.id) as total_dipinjam')
        )
            ->join('books', 'loans.book_id', '=', 'books.id')
            ->groupBy('books.id', 'books.judul')
            ->orderByDesc('total_dipinjam')
            ->first();
    }

    private function todayTransactions()
    {
        return Loan::with('book', 'user')
            ->whereDate('updated_at', today())
            ->where('status', '!=', 'terlambat')
            ->latest('updated_at')
            ->limit(3)
            ->get();
    }

    private function topDenda()
    {
        return Loan::with('user')
            ->where('denda', '>', 0)
            ->orderByDesc('denda')
            ->limit(3)
            ->get();
    }
}
