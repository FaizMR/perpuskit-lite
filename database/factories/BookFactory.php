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
            'judul' => $this->faker->judul,
            'penulis' => $this->faker->name,
            'penerbit' => $this->faker->company,
            'tanggal_terbit' => $this->faker->date('Y-m-d'),
            'category_id' => \App\Models\Category::inRandomOrder()->first()->id,
            'isbn' => $this->faker->isbn13,
            'jumlah_halaman' => $this->faker->numberBetween(100, 500),
            'deskripsi' => $this->faker->paragraph,
        ];
    }
}
