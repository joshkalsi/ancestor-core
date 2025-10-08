<?php

namespace App\Data;

use Carbon\CarbonImmutable;
use Spatie\LaravelData\Data;

/** @typescript */
class UnitData extends Data
{
  public function __construct(
    public string $id,
    public string $name,
    /** @var \App\Data\CategoryData[] */
    public array $categories,
    public CarbonImmutable $created_at,
    public CarbonImmutable $updated_at,
  ) {
  }

}