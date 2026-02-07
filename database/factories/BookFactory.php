<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\DataBuku>
 */
class BookFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            // Menggunakan helper fake() lebih aman daripada $this->faker
            'judul'          => fake()->sentence(3),
            'penulis'        => fake()->name(),
            'penerbit'       => fake()->company(),
            'tanggal_terbit' => fake()->date('Y-m-d'),
            'category_id'    => \App\Models\Category::inRandomOrder()->first()?->id ?? 1,
            'isbn'           => fake()->isbn13(),
            'jumlah_halaman' => fake()->numberBetween(100, 500),
            'deskripsi'      => fake()->paragraph(),
        ];
    }
}
