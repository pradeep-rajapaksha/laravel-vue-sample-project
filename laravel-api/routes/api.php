<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group(['middleware' => 'auth:api'], function () {
    
	Route::get('/posts', 'PostController@index');
	Route::post('/posts/{id}/submit', 'PostController@submitToMedium');
	Route::get('/posts/{id}', 'PostController@show');
	Route::post('/posts', 'PostController@store');

	Route::get('/images', 'ImageController@index');
	Route::get('/images/{id}', 'ImageController@show');
});

// Route::delete('/posts/{id}', 'PostController@delete');

Route::get('/medium/oauth', 'MediumController@index');
Route::post('/medium/oauth/callback', 'MediumController@callback');