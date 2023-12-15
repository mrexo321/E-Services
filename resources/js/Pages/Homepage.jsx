import Carousel from "@/Components/Carousel/Carousel";
import FlashMessage from "@/Components/FlashMessage";
import ProductList from "@/Components/Product/ProductList";
import MainLayout from "@/Layouts/MainLayout";
import React from "react";

const Homepage = (props) => {
    console.log(props);
    return (
        <div className="flex flex-col gap-y-8">
            {/* Carousel */}
            <section>
                <Carousel />
            </section>

            {/* List Produk */}
            <section>
                <ProductList data={props.products} title="Semua Produk" />
            </section>

            {/* Terlaris */}
            <section>
                <ProductList data={props.bestSellers} title="Terlaris" />
            </section>

            {/* Flash Message Notification */}
            {props.flash.message && (
                <FlashMessage message={props.flash.message} />
            )}
        </div>
    );
};

Homepage.layout = (page) => <MainLayout title="Homepage" children={page} />;

export default Homepage;
