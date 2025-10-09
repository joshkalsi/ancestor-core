<?php

namespace Database\Seeders;

use App\Models\Stage;
use App\Models\User;
use Illuminate\Database\Seeder;
use App\Models\Unit;

class UnitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $units = [
            'Space Marine Intercessor',
            'Ork Boy',
            'Stormcast Eternals Liberator',
            'Skaven Clanrat',
            'D&D Tiefling Wizard',
            'Star Wars Trooper',
        ];

        $user = User::first();
        $stage = Stage::first();

        foreach ($units as $unitName) {
            Unit::firstOrCreate(['name' => $unitName, 'user_id' => $user->id, 'stage_id' => $stage->id]);
        }
    }
}
