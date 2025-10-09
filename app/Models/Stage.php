<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Stage extends Model
{
    protected $fillable = ['name', 'user_id'];

    public function user()
    {
        return $this->belongsToMany(User::class);
    }

    public function units()
    {
        return $this->hasMany(Unit::class);
    }
}
