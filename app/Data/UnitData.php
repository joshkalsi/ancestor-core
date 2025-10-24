<?php

namespace App\Data;

use Carbon\CarbonImmutable;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;
use \App\Data\CategoryData;

/** @typescript */
class UnitData extends Data
{
  public function __construct(
    public string $id,
    public string $name,
    /** @var DataCollection<CategoryData> */
    public DataCollection $categories,
    public ?StageData $stage,
    public CarbonImmutable $created_at,
    public CarbonImmutable $updated_at,
  ) {
  }

}