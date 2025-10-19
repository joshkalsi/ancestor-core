<?php

namespace App\Data;

use App\Models\Stage;
use Carbon\CarbonImmutable;
use Illuminate\Database\Eloquent\Collection;
use Spatie\LaravelData\Data;

/** @typescript */
class StageData extends Data
{
  public function __construct(
    public int $id,
    public string $title,
    public ?int $position,
    public string $created_at,
    public string $updated_at,
  ) {
  }

  public static function fromModel(Stage $stage): self
  {
    $position = isset($stage->pivot) && isset($stage->pivot->position)
      ? $stage->pivot->position
      : null;

    return new self(
      id: $stage->id,
      title: $stage->title,
      position: $position,
      created_at: $stage->created_at->toDateTimeString(),
      updated_at: $stage->updated_at->toDateTimeString(),
    );
  }
}