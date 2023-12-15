<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Brand;
use App\Models\Product;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Cache;

class DashboardProductController extends Controller
{
    public function index()
    {
    $products = Product::query()
        ->select('product_name', 'slug' ,'price', 'stock', 'brand_id', 'image')
        ->with('brand:id,brand_name')->get();

    return inertia('Dashboard/Product/DashboardProductIndex', compact('products'));
    }

    public function create()
    {
        $brands = Brand::query()->select('id' , 'brand_name')->get();
        return inertia("Dashboard/Product/DashboardAddProduct" , compact('brands'));
    }

    public function store(Request $request){
        $request->validate([
            'product_name' => 'required|string|unique:products,product_name',
            'product_brand' => 'required|integer',
            'product_price' => 'required|integer',
            'product_stock' => 'required|integer',
            'product_image' => 'nullable|image|mimes:jpg,jpeg,png',
            'product_slug' => 'nullable|string|unique:products,slug'
        ]);

        $storeProduct = Product::create([
            'product_name' => $request->product_name,
            'brand_id' => $request->product_brand,
            'price' => $request->product_price,
            'stock' => $request->product_stock,
            'slug' => Str::slug($request->product_name),
            'image' => $request->product_image,
        ]);

        if($request->hasFile('product_image')){
            $hashedImageFile = Str::random(10) . $request->file('product_image')->getClientOriginalName();
            $request->file('product_image')->move('storage/productimages/', $hashedImageFile);
            $storeProduct->image = $hashedImageFile;
            $storeProduct->save();
        }

        return to_route('dashboard.product.index')->with('message' , "Produk Berhasil Ditambahkan");
    }

    public function destroy(Product $product)
    {
        $delete = Product::where('slug' , $product->slug)->delete();
        if($delete){
            return to_route('dashboard.product.index')->with('message' , 'Produk berhasil di hapus');
        }
    }

}
