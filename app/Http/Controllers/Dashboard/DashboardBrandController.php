<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Brand;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DashboardBrandController extends Controller
{
    public function index()
    {
        $brands = Brand::query()->select('brand_name');
        return inertia ('Dashboard/Brand/DashboardBrandIndex' , compact('brands'));
    }

    public function create()
    {
        return inertia('Dashboard/Brand/DashboardAddBrand');
    }

    public function store(Request $request)
    {
        $request->validate([
            'brand_name' => 'required|string'
        ]);

        $storeBrand = Brand::create([
            'brand_name' => $request->brand_name
        ]);

        if($storeBrand){
            return to_route('dashboard.brand.index')->with('message' , "Brand Berhasil Ditambahkan");
        }

    }
}
