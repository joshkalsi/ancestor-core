<?php

namespace App\Http\Controllers;

use App\Data\UnitData;
use App\Models\Unit;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $units = UnitData::collect(Unit::with('categories')->whereBelongsTo($user)->get());

        return inertia('dashboard', [
            'units' => $units,
        ]);
    }
}
