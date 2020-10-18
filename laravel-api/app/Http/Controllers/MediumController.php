<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use JonathanTorres\MediumSdk\Medium;
use App\Service\MediumService;

class MediumController extends Controller
{

    function __construct()
    {   
        
        $this->credentials = [    
            'client-id' => config('medium.client-id'),
            'client-secret' => config('medium.client-secret'),
            'redirect-url' => config('medium.redirect-url'),
            'state' => config('medium.state'),
            'scopes' => config('medium.scopes'),
        ];
    }

    /**
     * Submit a post to Medium.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // 
        $medium = new MediumService($this->credentials);
        // echo '<a href="'.url($medium->getAuthenticationUrl()).'">Authenticate with Medium</a>';
        return response()->json(['data'=>['url'=> url($medium->getAuthenticationUrl())],'error'=>false,'errormsg'=>'','success'=>true,'success'=>''],200);
    }

    /**
     * Callback function for Medium authentication.
     *
     * @return \Illuminate\Http\Response
     */
    public function callback(Request $request)
    {
        // 
        // $requestArr = $request->all();
        if (!($request->code && $request->state && $request->state == config('medium.state'))) {
            return response()->json(['data'=>'','error'=>true,'errormsg'=>'authentication failed','success'=>false],401);
        }

        $medium = new MediumService($this->credentials);
        // authenticate and get token set
        $tokens = $medium->authenticate($request->code); 
        // dd($tokens);
        // get authenticated user
        $authorized = $medium->getAuthenticatedUser();
        if(!empty($authorized) && !empty($tokens) && isset($authorized->data)) {
            // dd($authorized->data); 
            $authuser = $authorized->data;
            
            $exists = \App\User::where('mediumid', $authuser->id)->first();
            // var_dump($exists);
            if(!$exists) {

                $user = new \App\User();
                $user->name          = $authuser->name;
                $user->username      = $authuser->username;
                $user->mediumid      = $authuser->id;
                $user->access_token  = $tokens->access_token;
                $user->refresh_token = $tokens->refresh_token;
                $user->url           = $authuser->url;
                $user->imageUrl      = $authuser->imageUrl;

                $user->save();
            }
            else {
                $user = $exists;
            }

            if($user) {
                return response()->json(['data'=>$user,'error'=>false,'errormsg'=>'','success'=>true,'success'=>'user authenticated successfully'],200);
            }
        }
        else {
            return response()->json(['data'=>'','error'=>true,'errormsg'=>'authentication failed','success'=>false],401);
        }
    }
}

