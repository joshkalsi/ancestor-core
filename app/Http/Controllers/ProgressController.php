<?php

namespace App\Http\Controllers;

use App\Data\StageData;
use App\Data\UnitData;
use App\Models\Unit;
use Illuminate\Support\Facades\Auth;

class ProgressController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $units = Unit::with('categories', 'stage')->whereBelongsTo($user)->get();
        $stages = $user->stages()->get();

        return inertia('progress', [
            'units' => UnitData::collect($units),
            'stages' => StageData::collect($stages),
        ]);
    }
}
