<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'justin@gmail.com'],
            [
                'name'               => 'Admin PBM',
                'email'              => 'justin@pbm.com',
                'password'           => Hash::make('123justin'),
                'role'               => 'admin',
                'email_verified_at'  => now(),
            ]
        );

        $this->command->info('Admin user created: admin@pbm.com / admin123');
    }
}
