<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nik' => 'required|string|unique:users,nik',
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|confirmed|min:6',
            'no_hp' => 'nullable|string|max:13',
            'profile_user' => 'nullable|file|mimes:jpg,jpeg,png,gif,pdf|max:10240',
            'level' => 'required|in:admin,anggota,petugas',
        ];
    }
    public function messages(): array
    {
        return [
            'password.confirmed' => 'Konfirmasi password tidak cocok.',
            'profile_user.mimes' => 'File harus berupa JPG, JPEG, PNG, GIF, atau PDF.',
            'level.required' => 'Level harus admin, petugas, atau anggota.',
            'nik.unique' => 'NIK yang anda masukkan salah',
        ];
    }
}
