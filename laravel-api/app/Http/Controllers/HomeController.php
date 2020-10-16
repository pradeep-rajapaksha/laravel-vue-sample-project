<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use JonathanTorres\MediumSdk\Medium;
use App\Service\MediumService;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // 
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        // $credentials = [
        //     'client-id' => 'f6c8311e0de9',
        //     'client-secret' => '929534fec99333e337d4f25c75742fc2b22a696b',
        //     'redirect-url' => 'http://127.0.0.1:8000/callback/medium',
        //     'state' => 'DG52PR&u@MAq',
        //     'scopes' => 'basicProfile,publishPost',
        // ];
        // $medium = new Medium($credentials);
        // // dd($request);
        // // return view('home');

        // dd($this->medium->getAuthenticationUrl()); 
        // $medium->doSomeThing();

        // $medium = new MediumService();
        // echo '<a href="'.url($medium->getAuthenticationUrl()).'">Authenticate with Medium</a>';
        // dd($medium->getAuthenticationUrl());   

        return view('welcome');
    }
}
