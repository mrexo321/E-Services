<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Order extends Model
{
    use HasFactory;

    protected $fillable =
    [
        'user_id',
        'recipient',
        'phone',
        'email',
        'address',
        'province',
        'area'
    ];

    public function invoice():HasOne{
        return $this->hasOne(Invoice::class , 'order_code' , 'order_code');
    }
}
