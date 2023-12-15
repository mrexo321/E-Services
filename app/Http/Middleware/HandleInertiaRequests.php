<?php

namespace App\Http\Middleware;

use App\Models\Cart;
use App\Models\Brand;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;
use Illuminate\Http\Request;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        if(auth()->check()){
            $cart = Cart::where('user_id' , auth()->user()->id)->count();
        }else{
            $cart = null;
        }
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
            ],
            'cart' => [
                'total_item' => $cart ? $cart : null
            ],
            'navMenu' => Brand::query()->select('brand_name')->take(5)->get(),
            'flash' => [
                'message' => fn() => $request->session()->get('message')
            ],
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
        ];
    }
}
