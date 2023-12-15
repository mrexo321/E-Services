<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class InvoiceDetail extends Model
{
    use HasFactory;

    protected $fillable =
    [
        'invoice_id',
        'product_id',
        'quantity',
        'price',
        'subtotal'
    ];

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }
}
