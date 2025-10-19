<?php

namespace Database\Seeders;

use App\Models\Stage;
use App\Models\User;
use Illuminate\Database\Seeder;

class StageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $stages = [
            'Pile of Shame',
            'Assembled',
            'Sprayed',
            'In Progress',
            'Basing',
        ];

        $user = User::first();

        $index = 1;
        foreach ($stages as $stageName) {
            $stage = Stage::firstOrCreate(['title' => $stageName]);
            $user->stages()->attach($stage, ['position' => $index]);
            $index++;
        }
    }
}
