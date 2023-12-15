<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;

    protected $fillable =
    [
        'product_name',
        'brand_id',
        'price',
        'stock',
        'image',
        'slug'
    ];

    public function brand(): BelongsTo
    {
        return $this->belongsTo(Brand::class);
    }

    public function carts(): HasMany
    {
        return $this->hasMany(Cart::class);
    }

    public function invoice_details() :HasMany{
        return $this->hasMany(InvoiceDetail::class);
    }

    public function getImageAttribute()
    {
        $image = $this->attributes['image'];
        return $image ? asset('storage/productimages/' . $image) : null;
    }
}
