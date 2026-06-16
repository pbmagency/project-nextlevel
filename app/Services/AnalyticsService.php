<?php

namespace App\Services;

use App\Models\UserAnalytic;

class AnalyticsService
{
    public function record(array $data)
    {
        return UserAnalytic::create($data);
    }
}
