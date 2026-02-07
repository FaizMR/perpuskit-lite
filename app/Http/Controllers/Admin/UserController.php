<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use App\Services\UserService;

class UserController extends Controller
{

    public function __construct(
        protected UserService $userService
    ) {}
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $users = User::query()
            ->search($request->search, $request->column)
            ->filterLevel($request->level)
            ->sort($request->sortColumn, $request->order)
            ->paginate($request->get('perPage', 7))
            ->withQueryString();

        return Inertia::render('admin/user/Index', [
            'userResource' => $users,
            'filters' => $request->only(
                'search',
                'column',
                'sortColumn',
                'order',
                'level',
                'perPage',
                'searchBy'
            ),
        ]);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('admin/user/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUserRequest $request, UserService $userService)
    {
        $user = auth()->user();

        // Check limit untuk Lite plan
        if ($user->isLite()) {
            $userCount = User::count();
            if ($userCount >= 5) {
                return redirect()->route('upgrade')
                    ->with('message', 'Limit 5 user tercapai. Upgrade ke Full untuk unlimited!');
            }
        }

        $userService->create(
            $request->validated(),
            $request->file('profile_user')
        );

        return redirect()
            ->route('users.index')
            ->with('success', 'Pengguna berhasil ditambahkan.');
    }


    public function resetPassword(User $user)
    {
        $this->userService->resetPassword($user);

        return redirect()->back()->with(
            'success',
            'Password berhasil direset ke password awal.'
        );
    }


    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return Inertia::render('admin/user/Show', [
            'currentUser' => new UserResource($user),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        // untuk tidak menampilkan error "undefined variable $user"
        /** @var \App\Models\User $user */

        // dd($user);
        return Inertia::render('admin/user/Edit', [
            'currentUser' => new UserResource($user),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user, UserService $userService)
    {
        $userService->updateUser($user, $request->validated());

        return redirect()
            ->route('users.index')
            ->with('success', 'Pengguna berhasil diperbarui');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $user->delete();

        return redirect()
            ->back()
            ->with('success', 'Pengguna berhasil dihapus.');
    }
}
