<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('stage_user', function (Blueprint $table) {
            $table->addColumn('integer', 'position');
        });

        Schema::table('stages', function (Blueprint $table) {
            $table->dropColumn('position');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('stage_user', function (Blueprint $table) {
            $table->dropColumn('position');
        });

        Schema::table('stages', function (Blueprint $table) {
            $table->addColumn('float', 'position');
        });
    }
};
