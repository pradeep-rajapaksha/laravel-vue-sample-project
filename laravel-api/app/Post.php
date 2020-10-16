<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Post extends Model
{
    /**
     * The attributes that is table name.
     *
     * @var string
     */
    protected $table = 'posts';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
		'title', 'slug', 'content', 'image', 'published_at', 'author', 'status'
	];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [];

    /**
     * The attributes that should be valid for create.
     *
     * @var array
     */
    public static $rules = [
    	'title'           	=> 'required',
		'slug'          	=> '',
		'content'         	=> 'required',
		'image'         	=> 'sometimes', // |mimes:jpeg,png,gif,tiff
		'published_at'     	=> '',
		'author'         	=> '',
		'status'         	=> '',
    ];

    /**
     * The attributes that should be valid for create.
     *
     * @var array
     */
    public static $message = [];

    /**
     * Get the image record associated with the user.
     */
    public function _image()
    {
        return $this->hasOne('App\Image', 'image', 'id');
    }

    /**
     * The function that generate post slug.
     *
     * @var string
     */
    public static function slug($str) 
    {
    	$slug = Str::slug($str, '-');
    	// check posts table for existing slug
    	$existing = self::where('slug', $slug)->exists();
    	if ($existing) {
    		$count = 2; $original = $slug;
    		while (static::whereSlug($slug)->exists()) {
		        $slug = "{$original}-" . $count++;
		    }
    	}
    	return $slug;
    }
}
