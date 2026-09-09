<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $this->ensureUsersTableIsEmpty();

        Schema::table('users', function (Blueprint $table) {
            $table->uuid('id')->change();
            $table->enum('role', ['user', 'admin'])->default('user')->after('password');
        });

        Schema::table('sessions', function (Blueprint $table) {
            $table->foreignUuid('user_id')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        $this->ensureUsersTableIsEmpty();

        Schema::table('sessions', function (Blueprint $table) {
            $table->foreignId('user_id')->nullable()->change();
        });

        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('role');
            $table->id()->change();
        });
    }

    private function ensureUsersTableIsEmpty(): void
    {
        if (DB::table('users')->exists()) {
            throw new \LogicException('Cannot convert existing user IDs to UUIDs automatically.');
        }
    }
};
