<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use JonathanTorres\MediumSdk\Medium;
use App\Service\MediumService;

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
        dd($request); 
    }

    /**
     * Callback function for Medium authentication.
     *
     * @return \Illuminate\Http\Response
     */
    public function callback(Request $request)
    {
        // 
        $requestArr = $request->all();
        // dd($requestArr['code']); 
        
        $medium = new MediumService();
        // dd(); 
        $medium->authenticate($requestArr['code']); 
        dd($medium->getAuthenticatedUser());
    }
}

