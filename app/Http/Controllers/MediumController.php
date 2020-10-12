<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use JonathanTorres\MediumSdk\Medium;

class MediumController extends Controller
{
    /**
     * Submit a post to Medium.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // 
        $request->validate(['post' => ['required']]);
        $post = \App\Post::where('id', $request->post)->orWhere('slug', $request->post)->first();

        // if($post) {

        // }
        dd($request); 
    }
}

