<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Support\Facades\Cache;

class ProductController extends Controller
{
    public function index()
    {
        $products = Cache::remember('products-page', 10, function () {
                return Product::query()
                ->select('product_name' , 'price' , 'stock' , 'brand_id' , 'image')
                ->with('brand:id,brand_name')
                ->get();
        });
        return inertia('Product/ProductIndex' , compact('products'));
    }

    public function show(Product $product)
    {
        $product = Product::select('id' ,'product_name', 'price', 'image' , 'stock' , 'brand_id' , 'slug')
            ->with('brand:id,brand_name')
            ->where('slug' , $product->slug)
            ->first();

        $relatedProducts = Product::whereNot('slug' , $product->slug)->take(4)->get();
        return inertia('Product/ProductDetail', compact('product' , 'relatedProducts'));
    }

}
