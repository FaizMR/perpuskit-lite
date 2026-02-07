<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class UserService
{
    public function create(array $data, ?UploadedFile $file = null): User
    {
        $data['password'] = Hash::make($data['password']);
        $data['email_verified_at'] = now();

        if ($file) {
            $name = Str::slug($data['name']);
            $folder = "profile_user/{$name}";
            $filename = $file->getClientOriginalName();

            $data['profile_user'] = $file->storeAs(
                $folder,
                $filename,
                'public'
            );
        }
        return User::create($data);
    }

    public function resetPassword(User $user): void
    {
        $user->update([
            'password' => Hash::make(
                config('auth.default_password', 'password')
            ),
        ]);
    }

    public function updateUser(User $user, array $data): void
    {
        $name = Str::slug($data['name']);

        /** @var UploadedFile|null $file */
        $file = $data['profile_user'] ?? null;

        if ($file instanceof UploadedFile) {

            // Backup foto lama jika ada
            if ($user->profile_user && Storage::disk('public')->exists($user->profile_user)) {
                $filename = basename($user->profile_user);
                $timestamp = now()->format('Ymd_His');
                $backupDir = "backup/profile_user/{$name}";

                Storage::disk('public')->makeDirectory($backupDir);
                Storage::disk('public')->move(
                    $user->profile_user,
                    "{$backupDir}/backup_{$timestamp}_{$filename}"
                );
            }

            // Simpan foto baru
            $folderPath = "profile_user/{$name}";
            $data['profile_user'] = $file->storeAs(
                $folderPath,
                $file->getClientOriginalName(),
                'public'
            );
        } else {
            // Pastikan tidak mengupdate kolom jika tidak ada file baru
            unset($data['profile_user']);
        }
        $user->update($data);
    }
}
