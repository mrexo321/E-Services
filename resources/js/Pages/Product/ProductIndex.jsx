import ProductList from "@/Components/Product/ProductList";
import MainLayout from "@/Layouts/MainLayout";
import React from "react";

const ProductIndex = (props) => {
    console.log(props);
    return (
        <>
            <section></section>
            <section>
                <ProductList data={props.products} title="Produk" />
            </section>
        </>
    );
};

ProductIndex.layout = (page) => (
    <MainLayout title="Product Page" children={page} />
);

export default ProductIndex;
