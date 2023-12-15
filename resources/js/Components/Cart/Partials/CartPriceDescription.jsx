import Button from "@/Components/Button";
import { Link, useForm } from "@inertiajs/react";
import React from "react";

const CartPriceDescription = ({ items }) => {
    let subTotal = 0;
    let total = 0;
    items.map((item) => {
        subTotal = item.product.price * item.quantity;
        total += subTotal;
    });

    // const { get } = useForm({
    //     total_amount: total,
    // });
    // const checkoutHandler = (e) => {
    //     e.preventDefault();
    //     get(route("order.index"));
    // };
    return (
        <>
            <div className="md:flex hidden py-8 px-4 text-base md:text-lg flex-col gap-y-6 bg-[#fafafa] w-full md:w-1/3">
                <h1 className="font-semibold">
                    Ringkasan Produk ({items.length}) Produk
                </h1>
                <div>
                    <div className="flex justify-between items-center">
                        <h1>Subtotal</h1>
                        <h1 className="font-semibold">
                            Rp.{total.toLocaleString("id")}
                        </h1>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>Diskon</span>
                        <h1 className="font-semibold">Rp.0</h1>
                    </div>
                </div>
                <div className="h-px border"></div>
                <div className="flex flex-col gap-y-4">
                    <div className="flex items-center justify-between">
                        <h1>Total</h1>
                        <h1 className="font-semibold">
                            Rp.{total.toLocaleString("id")}
                        </h1>
                    </div>
                    <Link href={route("order.index")}>
                        <Button
                            className={`bg-blue-500 text-white w-full rounded-md py-1 px-2 ${
                                items.length === 0 ? "opacity-60" : ""
                            }`}
                        >
                            Checkout
                        </Button>
                    </Link>
                </div>
            </div>
            {/* Mobile Price Section */}
            <div className="md:hidden fixed bottom-0 w-full left-0 right-0 flex justify-between items-center p-4 bg-gray-100">
                <div className="flex flex-col">
                    <h1 className="flex items-center gap-2">
                        Total
                        <span className="font-semibold text-lg">
                            Rp. {total.toLocaleString("id")}
                        </span>
                    </h1>
                </div>
                <Link href={route("order.index")}>
                    <button className="bg-blue-600 text-white rounded py-1 px-2">
                        Checkout
                    </button>
                </Link>
            </div>
        </>
    );
};

export default CartPriceDescription;
