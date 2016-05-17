<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'surname', 'email', 'password', 'phone'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function shop() 
    {
        return $this->hasOne('App\Shop');
    }

    public function group()
    {
        return $this->belongTo('App\Group');
    }

    public function comments()
    {
        return $this->hasMany('App\Comment');
    }
}
