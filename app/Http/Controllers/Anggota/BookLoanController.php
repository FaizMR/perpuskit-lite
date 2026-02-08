<?php

namespace App\Http\Controllers\Anggota;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBookLoanRequest;
use App\Http\Resources\BookResource;
use App\Http\Resources\DataBukuResource;
use App\Http\Resources\PeminjamanBukuResource;
use App\Models\Book;
use App\Models\Category;
use App\Models\DataBuku;
use App\Models\Loan;
use App\Models\PeminjamanBuku;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Pest\Support\Str;

use function Symfony\Component\Clock\now;

class BookLoanController  extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {

        $BookLoan = Book::with('category')
            ->search($request->search, $request->column)
            ->latest()
            ->sort($request->sortColumn, $request->order)
            ->category($request)
            ->paginate($request->get('perPage', 7))
            ->withQueryString();

        return Inertia::render('anggota/loan/Index', [
            'BookLoan' => $BookLoan,
            'filters' => $request->only('search', 'column', 'sortColumn', 'order', 'category', 'searchBy', 'perPage'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBookLoanRequest $request)
    {
        $user = auth()->user();

        // Check limit untuk Lite plan (max 1x pengajuan)
        if ($user->isLite()) {
            $loanCount = Loan::where('user_id', $user->id)->count();
            if ($loanCount >= 1) {
                return redirect()->route('upgrade')
                    ->with('message', 'Limit 1 pengajuan peminjaman tercapai. Upgrade ke Full untuk unlimited!');
            }
        }

        Loan::create([
            'user_id' => auth()->id(),
            'kode_transaksi' => 'TRX-' . strtoupper(Str::random(8)),
            'book_id' => $request->book_id,

            'tanggal_pengajuan' => now(),
            'tanggal_peminjaman' => null,
            'tanggal_jatuh_tempo' => null,

            'status' => 'pending',
            'status_perpanjang' => null,
            'tanggal_pengembalian' => null,

            'catatan' => $request->catatan,
        ]);

        return redirect()->back()->with('success', 'Peminjaman buku berhasil diajukan.');
    }


    /**
     * Display the specified resource.
     */
    public function show(Book $peminjamanbuku)
    {
        $peminjamanbuku->load(['category']);
        return Inertia::render('anggota/loan/Show', [
            'currentPeminjaman' => new BookResource($peminjamanbuku),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Book $peminjamanBuku)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Book $peminjamanBuku)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $peminjamanBuku)
    {
        //
    }
}
