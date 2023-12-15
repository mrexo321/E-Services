import Button from "@/Components/Button";
import { useForm } from "@inertiajs/react";
import React, { useEffect } from "react";

const ProductDetailDescription = ({
    product_id,
    product_name,
    product_price,
    product_brand,
    product_stock,
}) => {
    const { data, setData, post } = useForm({
        product_id: null,
    });

    useEffect(() => {
        if (data.product_id !== null && product_stock > 0) {
            post(route("cart.store"), data);
        }
    }, [data]);

    const addToCart = (e) => {
        e.preventDefault();
        setData("product_id", product_id);
    };
    return (
        <div className="flex flex-col gap-y-6 md:px-0 px-4">
            <h1 className="text-2xl md:text-4xl">{product_name}</h1>
            <h2 className="text-xl md:text-2xl text-red-500 font-semibold">
                Rp.{product_price.toLocaleString()}
            </h2>
            <div className="h-px border"></div>
            <h2 className="text-lg text-gray-800 md:flex">
                <span className="font-semibold">Brand : </span>
                {product_brand}
            </h2>
            <h2 className="text-lg text-gray-800 md:flex">
                <span className="font-semibold">Stok : </span>
                {product_stock}
            </h2>
            {/* Dekstop View */}
            <div className="w-full md:flex hidden items-center gap-4">
                {product_stock > 0 ? (
                    <>
                        <Button className="bg-white text-blue-500 border border-blue-500 py-2 px-4">
                            Ambil di toko
                        </Button>
                        <form className="w-full" onSubmit={addToCart}>
                            <Button className="bg-blue-600 text-white border py-2 px-4">
                                Tambah ke keranjang
                            </Button>
                        </form>
                    </>
                ) : (
                    <span className="text-red-600 text-lg font-semibold">
                        Produk Habis
                    </span>
                )}
            </div>
            {/* Mobile View */}
            <div className="md:hidden fixed bottom-0 w-full left-0 right-0 flex justify-between items-center bg-white">
                {product_stock > 0 ? (
                    <>
                        <Button className="bg-white text-blue-500 rounded-none">
                            Ambil di toko
                        </Button>
                        <form className="w-full" onSubmit={addToCart}>
                            <Button className="bg-blue-500 rounded-none text-white">
                                Tambah keranjang
                            </Button>
                        </form>
                    </>
                ) : (
                    <span className="text-red-600 w-full text-center text-lg font-semibold">
                        Produk Habis
                    </span>
                )}
            </div>
        </div>
    );
};

export default ProductDetailDescription;
