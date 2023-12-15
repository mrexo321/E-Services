import Button from "@/Components/Button";
import { Link, useForm } from "@inertiajs/react";
import React, { useContext } from "react";
import { orderFormContext } from "@/Pages/Order/OrderIndex";
const OrderPriceDescription = ({ items }) => {
    const orderFormData = useContext(orderFormContext);

    const { post } = useForm();
    let subTotal = 0;
    let total = 0;
    let discountChecker = 0;
    const discount = 50000;
    items.map((item) => {
        subTotal = item.product.price * item.quantity;
        total += subTotal;
        discountChecker += subTotal;
        if (discountChecker > 1000000) {
            total -= 50000;
        }
    });
    const orderHandler = (e) => {
        e.preventDefault();
        post(route("order.checkout", orderFormData));
    };
    console.log(orderFormData);
    return (
        <>
            <div className="md:flex hidden py-8 px-4 text-base md:text-lg flex-col gap-y-6 bg-[#fafafa] w-full md:w-1/3">
                <h1 className="font-semibold">
                    Ringkasan Produk ({items.length}) Produk
                </h1>
                <div className="flex flex-col w-full gap-4 text-sm font-semibold">
                    <div className="bg-orange-100 py-2 px-4">
                        <h1>Kupon</h1>
                    </div>
                    <div className="flex sm:flex-col md:items-center gap-4">
                        <input
                            className="border rounded-lg w-full focus:ring-0 "
                            placeholder="Kode promo"
                            type="text"
                        />
                        <Button className="bg-blue-500 py-3 text-white px-6">
                            Terapkan
                        </Button>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between items-center">
                        <h1>Subtotal</h1>
                        <h1 className="font-semibold">
                            Rp.{discountChecker.toLocaleString("id")}
                        </h1>
                    </div>
                    <div className="flex justify-between items-center">
                        <span>Diskon</span>
                        <h1 className="font-semibold">
                            Rp.
                            {discountChecker > 1000000
                                ? discount.toLocaleString("id")
                                : 0}
                        </h1>
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
                    <form onSubmit={orderHandler}>
                        <Button
                            className={`bg-blue-500 text-white w-full rounded-md py-1 px-2 ${
                                items.length === 0 ? "opacity-60" : ""
                            }`}
                        >
                            Bayar
                        </Button>
                    </form>
                    <Link href={route("cart.index")}>
                        <Button className="border-2">
                            Kembali ke keranjang
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
                    <button className="bg-blue-600 text-white rounded py-1 px-2 w-[120px]">
                        Bayar
                    </button>
                </Link>
            </div>
        </>
    );
};

export default OrderPriceDescription;
