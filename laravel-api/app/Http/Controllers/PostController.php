<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use App\Service\MediumService;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $posts = \App\Post::all();

        return response()->json(['data'=>$posts,'error'=>false,'errormsg'=>'','success'=>true],200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $request->validate(\App\Post::$rules);

        $post = new \App\Post();
        $post->title        = $request->title;
        $post->slug         = \App\Post::slug($request->title);
        $post->content      = $request->content;

        if ($request->hasFile('image') && $request->file('image')->isValid()) {
            // store image
            $image = $request->image->store('public/uploads');

            $_image = new \App\Image();
            $_image->filename = basename($image);
            $_image->path = $image;
            if($_image->save()) {
                $post->image    = $_image->id;
            }
        }

        $post->published_at = ($request->status == 'published') ? date('Y-m-d H:i:s') : null;
        // $post->author       = \Auth::user()->id;
        $post->status       = empty($request->status) ? 'draft' : $request->status;

        if ($post->save()) {
            // 
            return response()->json(['data'=>$post,'error'=>false,'errormsg'=>'','success'=>true,'success'=>'post created successfully'],201);
        }

        return response()->json(['data'=>'','error'=>true,'errormsg'=>'post create unsuccessful','success'=>false],422);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $post = \App\Post::findOrFail($id);

        if($post->image) {
            // $post->image = $post->_image();
            $post->image = \App\Image::where('id', $post->image)->first();
            if($post->image) {
                $url = \Storage::url($post->image->path);
                $post->image->url = asset($url);
            }
        }

        if(empty($post))
            return response()->json(['data'=>$post,'error'=>true,'errormsg'=>'post not found','success'=>false],404);

        return response()->json(['data'=>$post,'error'=>false,'errormsg'=>'','success'=>true],200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, \App\Post $post)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(\App\Post $post)
    {
        //
    }

    /**
     * Publish the specified resource to Medium.com.
     *
     * @param  \App\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function submitToMedium($id)
    {
        //
        $post = \App\Post::find($id);
        
        if(empty($post))
            return response()->json(['data'=>$post,'error'=>true,'errormsg'=>'post not found','success'=>false],404);

        // 
        $medium = new MediumService();
        $medium->setAccessToken(\Auth::user()->access_token);

        $data = [
            'title' => $post->title,
            'contentFormat' => 'html',
            'content' => $post->content,
            'publishStatus' => 'draft',
        ];
        $response = $medium->createPost(\Auth::user()->mediumid, $data);

        if($response->data && $response->data->id) {
            // 
            $post->status = 'published';
            $post->published_at = date('Y-m-d H:i:s');
            $post->save();

            if($post->image) {  
                $post->image = \App\Image::where('id', $post->image)->first();
                if($post->image) {
                    $url = \Storage::url($post->image->path);
                    $post->image->url = asset($url);
                }
            }

            return response()->json(['data'=>$post,'error'=>false,'errormsg'=>'','success'=>true],200);
        }

        return response()->json(['data'=>$post,'error'=>true,'errormsg'=>'post could not submit to medium.com','success'=>false],401);
    }

}
