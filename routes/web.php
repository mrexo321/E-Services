<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\Dashboard\DashboardBrandController;
// Dashboard
use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\Dashboard\DashboardProductController;

// Add-ons
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// Home Controller
Route::get('/' , HomeController::class)->name('homepage');

// Product Controller
Route::controller(ProductController::class)->group(function(){
    Route::get('/product' , 'index')->name('product.index');
    Route::get('/product/{product:slug}' , 'show')->name('product.show');
});




Route::middleware('auth' , 'verified')->group(function(){
    Route::get('/dashboard' , DashboardController::class)->name('dashboard');
    Route::prefix('/dashboard')->group(function(){
        // Dashboard Product Controller
        Route::controller(DashboardProductController::class)->group(function(){
            Route::get('/product' , 'index')->name('dashboard.product.index');
            Route::get('/product/add-product' , 'create')->name('dashboard.product.create');
            Route::post('/product' , 'store')->name('dashboard.product.store');
            Route::post('/product/{product:slug}' , 'destroy')->name('dashboard.product.destroy');
        });
        Route::controller(DashboardBrandController::class)->group(function(){
            Route::get('/brand' , 'index')->name('dashboard.brand.index');
            Route::get('/brand/add-brand' , 'create')->name('dashboard.brand.create');
            Route::post('/brand' , 'store')->name('dashboard.brand.store');
        });
    });
});

Route::middleware('auth')->group(function () {
    // Cart Controller
    Route::controller(CartController::class)->group(function(){
        Route::get('/cart' , 'index')->name('cart.index');
        Route::post('/cart', 'store' )->name('cart.store');
        Route::post('/cart/{cart:product_id}', 'destroy' )->name('cart.destroy');
    });
    Route::controller(CheckoutController::class)->group(function(){
        Route::get('/checkout' , 'index')->name('checkout.index');
        Route::post('/checkout' , 'store')->name('checkout.store');
    });
    Route::controller(OrderController::class)->group(function(){
        Route::get('/order' , 'index')->name('order.index');
        Route::post('/order' , 'checkout')->name('order.checkout');



    });
    Route::controller(InvoiceController::class)->group(function(){
        Route::get('/invoice' , 'index')->name('invoice.index');
    });
});

Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

require __DIR__.'/auth.php';
