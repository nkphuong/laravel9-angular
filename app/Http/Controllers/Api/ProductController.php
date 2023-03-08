<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductCollection;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use App\Services\ProductService;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(ProductService $productService)
    {
        return ProductCollection::make($productService->getAll());
    }

    /**
     * Display a product
     *
     * @param $id
     * @return ProductResource
     */
    public function show(Product $product)
    {
        return ProductResource::make($product);
    }
}
