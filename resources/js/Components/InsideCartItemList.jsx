import { useForm } from "@inertiajs/react";
import { Trash } from "@phosphor-icons/react";
import React from "react";

const InsideCartItemList = ({ items, title, subtitle }) => {
    const { post } = useForm();
    return (
        <>
            <h1 className="font-semibold md:text-start text-center">{title}</h1>
            <div className="space-y-2 text-base">
                <h1>{subtitle}</h1>
                <div className="h-px border"></div>
            </div>

            {items.length > 0 ? (
                <div className="flex flex-col gap-4 justify-start">
                    {items.map((item) => (
                        <div
                            key={item.product_id}
                            className="flex items-center justify-between"
                        >
                            <div className="flex items-center space-x-2">
                                <img
                                    className="w-[100px] h-[100px] max-w-full"
                                    src={item.product.image}
                                    alt=""
                                />
                                <div className="flex flex-col">
                                    <h1>{item.product.product_name}</h1>
                                    <span className="text-base">
                                        QTY: {item.quantity}
                                    </span>
                                    <form
                                        onSubmit={(e) =>
                                            e.preventDefault(
                                                post(
                                                    route(
                                                        "cart.destroy",
                                                        item.product_id
                                                    )
                                                )
                                            )
                                        }
                                    >
                                        <button type="submit">
                                            <Trash
                                                className="cursor-pointer fill-red-600 border"
                                                size={24}
                                            />
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div>
                                <h1 className="font-semibold text-lg">
                                    Rp.
                                    {item.product.price.toLocaleString("id")}
                                </h1>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <h1 className="text-center md:text-xl text-lg text-gray-500 opacity-70">
                    Keranjang Kosong
                </h1>
            )}
        </>
    );
};

export default InsideCartItemList;
