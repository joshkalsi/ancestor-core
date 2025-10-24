<?php

namespace App\Http\Controllers;

use App\Data\UnitData;
use App\Http\Requests\Units\StoreUnitRequest;
use App\Http\Requests\Units\UpdateUnitRequest;
use App\Models\Stage;
use App\Models\Unit;
use Illuminate\Support\Facades\Auth;

class UnitController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('units/index', [
            'units' => UnitData::collect(Unit::with('categories')->whereBelongsTo(Auth::user())->get()),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('units/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUnitRequest $request)
    {
        $validated = $request->validated();
        if (!array_key_exists('stage_id', $validated)) {
            $stage = Stage::first();
            $validated['stage_id'] = $stage->id;
        }
        $request->user()->units()->create($validated);

        return to_route('units.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return inertia('units/show', [
            'unit' => UnitData::from(Unit::with('categories')->find($id)),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return inertia('units/edit', [
            'unit' => UnitData::from(Unit::with('categories')->find($id)),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUnitRequest $request, string $id)
    {
        $unit = Unit::findOrFail($id);
        $unit->update($request->validated());

        return to_route('units.show', [
            'unit' => $id
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Unit::destroy($id);
        return to_route('units.index');
    }
}
