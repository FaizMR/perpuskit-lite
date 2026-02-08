<?php

namespace App\Http\Controllers\Petugas;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreLoanRequest;
use App\Http\Resources\DataBukuResource;
use App\Http\Resources\LoanResource;
use App\Http\Resources\PeminjamanBukuResource;
use App\Models\Loan;
use App\Models\PeminjamanBuku;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LoanRequestController  extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $LoanRequest = Loan::with(['book', 'user'])
            ->LoanRequest()
            ->search($request->search, $request->column)
            ->sort($request->sortColumn, $request->order)
            ->paginate($request->get('perPage', 7))
            ->withQueryString();
        return Inertia::render('petugas/loanrequest/Index', [
            'LoanRequest' => $LoanRequest,
            'filters' => $request->only('search', 'column', 'sortColumn', 'order', 'searchBy', 'perPage')
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
    public function store(StoreLoanRequest $request)
    {
        $validated = $request->validated();
        $peminjamanBuku = Loan::findOrFail($request->id);
        $peminjamanBuku->update($validated);
        return redirect()->back()
            ->with(
                $request->status === 'dipinjam' ? 'success' : 'error',
                $request->status === 'dipinjam'
                    ? 'Pengajuan peminjaman berhasil diterima.'
                    : 'Pengajuan peminjaman ditolak.'
            );
    }


    /**
     * Display the specified resource.
     */
    public function show(Loan $pengajuanpeminjaman)
    {
        $pengajuanpeminjaman->load(['user', 'book']);
        return Inertia::render('Petugas/Loanrequest/Show', [
            'currentPengajuan' => new LoanResource($pengajuanpeminjaman),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
