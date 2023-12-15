import CartItemList from "@/Components/Cart/Partials/CartItemList";
import CartPriceDescription from "@/Components/Cart/Partials/CartPriceDescription";
import Container from "@/Components/Container";
import FlashMessage from "@/Components/FlashMessage";
import MainLayout from "@/Layouts/MainLayout";
import React from "react";

const CartIndex = ({ carts, flash }) => {
    return (
        <Container className="text-base w-full md:flex items-start gap-x-4 min-h-screen">
            <CartItemList items={carts} />
            <CartPriceDescription items={carts} />
            {flash.message && <FlashMessage message={flash.message} />}
        </Container>
    );
};

export default CartIndex;
CartIndex.layout = (page) => <MainLayout children={page} title="Cart" />;
