<?php

namespace App\Data;

use Carbon\CarbonImmutable;
use Spatie\LaravelData\Data;

/** @typescript */
class CategoryData extends Data
{
  public function __construct(
    public int $id,
    public string $name,
    public CarbonImmutable $created_at,
    public CarbonImmutable $updated_at,
  ) {
  }

}