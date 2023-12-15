<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Order;
use App\Models\Invoice;
use App\Models\Product;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\InvoiceDetail;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;

class OrderController extends Controller
{
    public function index()
    {
        $items = Cart::where('user_id' , auth()->user()->id)
        ->with('product:id,product_name,price,image')
        ->select('product_id','quantity')
        ->latest()
        ->get();

        // provincies Responses
        $provincesResponse = Cache::remember('provinces', 60, function () {
            return Http::withHeaders([
                'key' => 'c8620c1da1d025b3143271d1665cb5c1'
            ])->get('https://api.rajaongkir.com/starter/province')->json();
        });
        // Cities Responses
        $citiesResponse = Cache::remember('cities', 60, function () {
            return Http::withHeaders([
                'key' => 'c8620c1da1d025b3143271d1665cb5c1'
            ])->get('https://api.rajaongkir.com/starter/city')->json();
        });
        $provincesData = $provincesResponse['rajaongkir']['results'];
        $citiesData = $citiesResponse['rajaongkir']['results'];
        return inertia('Order/OrderIndex' , compact('items' , 'provincesData' , 'citiesData'));
    }

    public function checkout(Request $request){
        $cart = Cart::where('user_id' , auth()->user()->id)->get();
        $request->validate([
            'name' => 'required|string',
            'phone' => 'required|string',
            'email' => 'required|email',
            'address' => 'required|string',
            'province' => 'required|string',
            'city' => 'required|string',
            'total_amount' => 'required|integer'
        ]);

        // Make an Order
        $order = new Order();
        $order->user_id = auth()->user()->id;
        $order->recipient = $request->name;
        $order->phone = $request->phone;
        $order->email = $request->email;
        $order->address = $request->address;
        $order->province = $request->province;
        $order->area = $request->city;
        $order->order_code = "Order-" . Str::random(5);
        $order->status = 'unpaid';
        $order->save();

        // Make an new Invoices
        $invoice = new Invoice();
        $invoice->user_id = auth()->user()->id;
        $invoice->order_code = $order->order_code;
        $invoice->total_amount = $request->total_amount;
        $invoice->invoice_code = "Invoice-" . Str::random(8);
        $invoice->save();

        // Generate Invoices
        foreach($cart as $item):
            // generate an invoices detail
            $invoiceDetail = new InvoiceDetail();
            $product = Product::where('id' , $item->product_id)->first();
            $invoiceDetail->invoice_id = $invoice->id;
            $invoiceDetail->product_id = $item->product_id;
            $invoiceDetail->invoice_code = $invoice->invoice_code;
            $invoiceDetail->quantity = $item->quantity;
            $invoiceDetail->price = $item->product->price;
            $invoiceDetail->subtotal = $item->quantity * $item->product->price;

            // Decrease product stock and increase product Sold
            $product->stock -= $item->quantity;
            $product->sold += $item->quantity;
            $invoiceDetail->save();
            $product->save();
        endforeach;


         // Set your Merchant Server Key
         \Midtrans\Config::$serverKey = config('midtrans.server_key');
         // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
         \Midtrans\Config::$isProduction = false;
         // Set sanitization on (default)
         \Midtrans\Config::$isSanitized = true;
         // Set 3DS transaction for credit card to true
         \Midtrans\Config::$is3ds = true;

         $params = array(
             'transaction_details' => array(
                 'order_id' => $order->order_code,
                 'gross_amount' => $invoice->total_amount,
             ),
             'customer_details' => array(
                 'name' => $request->name,
                 'email' => $request->email,
                 'phone' => $request->phone,
             ),
         );

        $snapToken = \Midtrans\Snap::getSnapToken($params);

        // $deleteCart = Cart::where('user_id' , auth()->user()->id)->delete();

        $items = InvoiceDetail::where('invoice_code' , $invoice->invoice_code)
        ->with('product:id,product_name,price,image')
        ->get();
        return inertia("Checkout/CheckoutIndex" , compact('snapToken' , 'items'));
    }

    public function callback(Request $request , Order $order){
        $serverKey = config('midtrans.server_key');
        $hashedValue = hash("sha512" , $request->order_id.$request->status_code.$request->gross_amount.$serverKey);
        if($hashedValue == $request->signature_key){
            if($request->transaction_status =='capture'){
                $order = Order::where('order_code' , $request->order_id);
                $order->update(['status' => 'paid']);
            }
        }
    }
}
