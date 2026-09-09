<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware('guest')->group(function () {
    Route::inertia('/login', 'auth/login')->name('login');
    Route::post('/login', [AuthenticatedSessionController::class, 'store'])->name('loginSubmit');
    Route::inertia('/register', 'auth/register')->name('register');
    Route::post('/register', [RegisteredUserController::class, 'store'])->name('registerSubmit');
});

Route::inertia('/canvas', 'canvas')
    ->middleware('auth')
    ->name('canvas');

Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
    ->middleware('auth')
    ->name('logout');
