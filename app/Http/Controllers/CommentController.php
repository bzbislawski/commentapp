<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Comment;
use Auth;
use DB;

class CommentController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt.auth', ['except' => ['index']]);
    }

    public function index()
    {
        $comments = DB::table('comments')
            ->select('comments.*', 'users.name')
            ->join('users', 'users.id', '=', 'comments.user_id')
            ->get();
        return response()->json($comments);
    	//return response()->json(Comment::get());
    }

    public function store(Request $request)
    {
        $comment = new Comment($request->all());
        Auth::user()->comments()->save($comment);

    	return response()->json(['success' => true]);
    }

    public function destroy($id)
    {

        $comment = Comment::find($id);
        if($comment->user_id == Auth::user()->id)
        {
            Comment::destroy($id);
            return response()->json(['success' => true]);
        }
        else
        {
            return response()->json(['error' => 'invalid_credentials'], 401);
        }
    }

}
