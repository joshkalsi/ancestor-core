<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Unit;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::first();
        $category = Category::firstOrCreate(['name' => 'Test category']);
        $user->categories()->attach($category);

        $units = Unit::take(5)->get();

        foreach ($units as $unit) {
            $unit->categories()->attach($category);
        }

    }
}
