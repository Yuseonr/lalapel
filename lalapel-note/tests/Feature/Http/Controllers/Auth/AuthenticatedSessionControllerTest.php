<?php

use App\Models\User;
use Illuminate\Auth\Events\Lockout;
use Illuminate\Support\Facades\Event;

it('authenticates a user with valid credentials', function () {
    $user = User::factory()->create([
        'email' => 'rafi@example.com',
        'password' => 'password123',
    ]);

    $response = $this->post('/login', [
        'email' => 'rafi@example.com',
        'password' => 'password123',
    ]);

    $response->assertRedirect(route('canvas'));
    $this->assertAuthenticatedAs($user);
});

it('rejects login with invalid credentials', function () {
    User::factory()->create([
        'email' => 'rafi@example.com',
        'password' => 'password123',
    ]);

    $response = $this->post('/login', [
        'email' => 'rafi@example.com',
        'password' => 'wrong-password',
    ]);

    $response->assertSessionHasErrors('email');
    $this->assertGuest();
});

it('rejects login when required fields are missing', function () {
    $response = $this->post('/login');

    $response->assertSessionHasErrors(['email', 'password']);
    $this->assertGuest();
});

it('rate limits repeated failed login attempts', function () {
    Event::fake([Lockout::class]);

    User::factory()->create([
        'email' => 'rafi@example.com',
        'password' => 'password123',
    ]);

    foreach (range(1, 6) as $attempt) {
        $response = $this->post('/login', [
            'email' => 'rafi@example.com',
            'password' => 'wrong-password',
        ]);
    }

    $response->assertSessionHasErrors('email');
    Event::assertDispatched(Lockout::class);
    $this->assertGuest();
});

it('logs out an authenticated user', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->post('/logout');

    $response->assertRedirect(route('home'));
    $this->assertGuest();
});
