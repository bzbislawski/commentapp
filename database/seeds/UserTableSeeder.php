<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->delete();

        User::create([
            'id' => 1,
        	'name' => 'Admin',
        	'email' => 'admin@gmail.com',
        	'password' => Hash::make('admin')
        ]);

        User::create([
            'id' => 2,
            'name' => 'Bartek',
            'email' => 'asd@op.pl',
            'password' => Hash::make('123123')
        ]);
    }
}
