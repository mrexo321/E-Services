<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class CartController extends Controller
{
    protected $auth;
    public function index()
    {
        $carts = Cart::where('user_id' , auth()->user()->id)
        ->with('product:id,product_name,price,image')
        ->select('product_id','quantity')
        ->latest()
        ->get();

        return inertia('Cart/CartIndex' , compact('carts'));
    }

    public function store(Request $request)
    {
        $cart = Cart::where('user_id' , auth()->user()->id)
        ->where('product_id' , $request->product_id)
        ->first();
        $dynamicStock = Product::where('id', $request->product_id)->first();

        if($cart){
            $cart->quantity += 1;
            $cart->save();
            $dynamicStock->save();
            return back()->with('message' , "Keranjang berhasil di update");
        }else{
            Cart::create([
                'user_id' => auth()->user()->id,
                'product_id' => $request->product_id,
                'quantity' => 1
            ]);
            $dynamicStock->save();
            return back()->with('message' , "Produk Berhasil di tambahkan");
        }
    }

    public function destroy(Cart $cart)
    {
        $deleteCart =  Cart::where('user_id' , auth()->user()->id)->where('product_id' , $cart->product_id)->delete();
        if($deleteCart){
            return back()->with('message' , "Produk Berhasil Dihapus");
        }
        // return back();
    }
}
