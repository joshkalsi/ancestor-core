<?php

namespace App\Http\Controllers;

use App\Data\UnitData;
use App\Models\Unit;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index()
    {

        return inertia('dashboard', [
            'units' => UnitData::collect(Unit::with('categories', 'stage')->whereBelongsTo(Auth::user())->get()),
        ]);
    }
}
