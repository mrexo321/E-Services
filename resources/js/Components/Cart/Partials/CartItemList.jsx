import InsideCartItemList from "@/Components/InsideCartItemList";
import { useForm } from "@inertiajs/react";
import { Trash } from "@phosphor-icons/react/dist/ssr";
import React, { useEffect } from "react";

const CartItemList = ({ items }) => {
    console.log(items);
    const { post } = useForm();
    return (
        <div className="py-8 text-sm md:text-lg flex flex-col gap-y-6 md:w-2/3 px-2 md:overflow-y-auto md:h-screen">
            <InsideCartItemList
                title="Daftar Produk"
                subtitle=""
                items={items}
            />
        </div>
    );
};

export default CartItemList;
