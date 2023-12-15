import Button from "@/Components/Button";
import Container from "@/Components/Container";
import InsideCartItemList from "@/Components/InsideCartItemList";
import MainLayout from "@/Layouts/MainLayout";
import { Link } from "@inertiajs/react";
import React from "react";

const CheckoutIndex = ({ items, snapToken }) => {
    let subTotal = 0;
    let total = 0;
    let discountChecker = 0;
    items.map((item) => {
        subTotal = item.product.price * item.quantity;
        total += subTotal;
        discountChecker += subTotal;
        if (discountChecker > 1000000) {
            total -= 50000;
        }
    });

    return (
        <Container className="text-base w-full md:flex items-start gap-x-4 min-h-screen">
            <div className="py-8 text-sm md:text-lg bg-[#fafafa] flex flex-col  gap-y-6 md:w-2/3 px-2 md:overflow-y-auto md:h-screen">
                <InsideCartItemList
                    title="Daftar Produk"
                    subtitle=""
                    items={items}
                />
            </div>
            <div className="md:flex hidden py-8 px-4 text-base md:text-lg flex-col gap-y-6 bg-[#fafafa] w-full md:w-1/3">
                <h1 className="font-semibold">
                    Ringkasan Produk ({items.length}) Produk
                </h1>

                <div className="h-px border"></div>
                <div className="flex flex-col gap-y-4">
                    <div className="flex items-center justify-between">
                        <h1>Total</h1>
                        <h1 className="font-semibold">
                            Rp.{total.toLocaleString("id")}
                        </h1>
                    </div>
                    <Button
                        onClick={() =>
                            window.snap.pay(snapToken, {
                                onSuccess: function (result) {
                                    /* You may add your own implementation here */
                                    alert("payment success!");
                                    window.location.href = "/invoice";
                                },
                                onPending: function (result) {
                                    /* You may add your own implementation here */
                                    alert("wating your payment!");
                                    console.log(result);
                                },
                                onError: function (result) {
                                    /* You may add your own implementation here */
                                    alert("payment failed!");
                                    console.log(result);
                                },
                                onClose: function () {
                                    /* You may add your own implementation here */
                                    alert(
                                        "you closed the popup without finishing the payment"
                                    );
                                },
                            })
                        }
                        className={`bg-blue-500 text-white w-full rounded-md py-1 px-2 ${
                            items.length === 0 ? "opacity-60" : ""
                        }`}
                    >
                        Bayar
                    </Button>
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
        </Container>
    );
};

CheckoutIndex.layout = (page) => <MainLayout children={page} />;

export default CheckoutIndex;
