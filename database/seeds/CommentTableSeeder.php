<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Comment;
use Faker\Factory as Faker;

class CommentTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('comments')->delete();

        Comment::create([
            'user_id' => 1,
        	'text' => 'The truth is out there.'
        	]);

        Comment::create([
            'user_id' => 1,
        	'text' => 'Stop it Mulder!'
        	]);


        Comment::create([
            'user_id' => 1,
        	'text' => 'This is bigger than us.'
        	]);

        $faker = Faker::create();
        foreach(range(1,5) as $index)
        {
            Comment::create([
                'user_id' => 2,
                'text' => $faker->sentence,
            ]);
        }
    }
}
