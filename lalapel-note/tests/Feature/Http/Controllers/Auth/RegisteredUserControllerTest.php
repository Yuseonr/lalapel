<?php

use App\Enums\UserRole;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

it('registers and authenticates a user with a UUID and user role', function () {
    $response = $this->post('/register', [
        'name' => 'Rafi Anandra',
        'email' => 'rafi@example.com',
        'password' => 'password123',
        'password_confirmation' => 'password123',
    ]);

    $user = User::query()->where('email', 'rafi@example.com')->firstOrFail();

    $response->assertRedirect(route('home'));
    $this->assertAuthenticatedAs($user);
    expect($user->id)->toBeUuid();
    expect($user->role)->toBe(UserRole::User);
    expect(Hash::check('password123', $user->password))->toBeTrue();
});

it('rejects registration when required fields are missing', function () {
    $response = $this->post('/register');

    $response->assertSessionHasErrors(['name', 'email', 'password']);
    $this->assertGuest();
    expect(User::query()->count())->toBe(0);
});

it('rejects registration when the email is already registered', function () {
    User::factory()->create(['email' => 'rafi@example.com']);

    $response = $this->post('/register', [
        'name' => 'Rafi Anandra',
        'email' => 'rafi@example.com',
        'password' => 'password123',
        'password_confirmation' => 'password123',
    ]);

    $response->assertSessionHasErrors('email');
    $this->assertGuest();
    expect(User::query()->count())->toBe(1);
});

it('does not allow registration to assign the admin role', function () {
    $this->post('/register', [
        'name' => 'Rafi Anandra',
        'email' => 'rafi@example.com',
        'password' => 'password123',
        'password_confirmation' => 'password123',
        'role' => 'admin',
    ]);

    $user = User::query()->where('email', 'rafi@example.com')->firstOrFail();

    expect($user->role)->toBe(UserRole::User);
});
