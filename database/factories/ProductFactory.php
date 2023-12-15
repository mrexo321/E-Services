<?php

namespace Database\Factories;

use App\Models\Brand;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'product_name' => $name = fake()->name(),
            "brand_id" => Brand::factory()->create()->id,
            'price' => rand(10000 , 100000),
            'stock' => rand(1,5),
            'sold' => rand(1,100),
            'slug' => Str::slug($name),
            'image' => "https://bb-scm-prod-pim.oss-ap-southeast-5.aliyuncs.com/products/521e7fbc54abaaa597c2c29bad3e9222/helix/01-APPLE-8DVPHAPP0-APPMTP03ID-A-Black.jpg?x-oss-process=image/format,webp"
        ];
    }
}
