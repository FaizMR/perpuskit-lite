<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBookRequest;
use App\Http\Requests\UpdateBookRequest;
use App\Http\Resources\BookResource;
use App\Http\Resources\DataBukuResource;
use App\Models\Book;
use App\Models\Category;
use App\Models\DataBuku;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $books = Book::with('category')
            ->search($request->search, $request->column)
            ->latest()
            ->sort($request->sortColumn, $request->order)
            ->category($request)
            ->paginate($request->get('perPage', 7))
            ->withQueryString();

        return Inertia::render('admin/book/Index', [
            'books' => $books,
            'filters' => $request->only('search', 'column', 'perPage', 'category', 'searchBy'),
        ]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('admin/book/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBookRequest $request)
    {
        $user = auth()->user();

        // Check limit untuk Lite plan
        if ($user->isLite()) {
            $bookCount = Book::count();
            if ($bookCount >= 20) {
                return redirect()->route('upgrade')
                    ->with('message', 'Limit 20 buku tercapai. Upgrade ke Full untuk unlimited!');
            }
        }

        Book::create($request->validated());

        return redirect()
            ->route('databukus.index')
            ->with('success', 'Data buku berhasil ditambahkan.');
    }


    /**
     * Display the specified resource.
     */
    public function show(Book $databuku)
    {
        $databuku->load('category');

        return Inertia::render('admin/book/Show', [
            'book' => new BookResource($databuku),
        ]);
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Book $databuku)
    {
        return Inertia::render('admin/book/Edit', [
            'currentBook' => new BookResource($databuku),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBookRequest $request, Book $databuku)
    {
        $databuku->update($request->validated());

        return redirect()
            ->route('databukus.index')
            ->with('success', 'Data buku berhasil diperbarui.');
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $databuku)
    {
        $databuku->delete();
        return redirect()->back()->with('error', 'Data buku berhasil dihapus.');
    }
}
