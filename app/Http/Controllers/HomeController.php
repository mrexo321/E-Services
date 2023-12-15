<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Support\Facades\Cache;

class HomeController extends Controller
{
    public function __invoke()
    {
        $products = Cache::remember('products', 45, function () {
            return Product::select('product_name' , 'price' , 'image' , 'slug')->take(8)->get();
        });
        $bestSellers = Cache::remember('best-seller', 45, function () {
            return Product::select('product_name' , 'price' , 'image' , 'slug')
            ->orderBy('sold' , 'desc')
            ->take(4)
            ->get();
        });
        return inertia('Homepage' , compact('products' , 'bestSellers'));
    }
}
