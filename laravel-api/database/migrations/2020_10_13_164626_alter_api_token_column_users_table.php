<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterApiTokenColumnUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        if (Schema::hasTable('users')) {
            if (Schema::hasColumn('users', 'api_token')) {
                Schema::table('users', function (Blueprint $table) {
                    $table->dropColumn(['api_token']);
                });
            }
            Schema::table('users', function ($table) {
                $table->string('api_token', 255)->after('password')
                                    ->unique()
                                    ->nullable()
                                    ->default(null);
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // 
        if (Schema::hasTable('users')) {
            if (Schema::hasColumn('users', 'api_token')) {
                Schema::table('users', function (Blueprint $table) {
                    $table->dropColumn(['api_token']);
                });
            }
        }
    }
}
