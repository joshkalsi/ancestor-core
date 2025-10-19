<?php

namespace App\Http\Controllers;

use App\Http\Requests\Stages\UpdateStageOrderRequest;
use App\Models\Stage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class StageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    public function updateOrder(UpdateStageOrderRequest $request)
    {
        $validated = $request->validated();
        $stageOrder = $validated['order'];

        try {
            foreach ($stageOrder as $index => $stageId) {
                $request->user()->stages()->updateExistingPivot($stageId, ['position' => $index + 1]);
            }

            return response()->json([
                'success' => true,
                'columnOrder' => $request->user()->stages
            ]);

        } catch (\Throwable $th) {
            Log::error($th);
            return response()->json([
                'success' => false,
                'message' => 'Error reordering columns'
            ], 500);
        }
    }
}
