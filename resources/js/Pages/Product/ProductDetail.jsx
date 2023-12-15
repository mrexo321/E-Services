import Container from "@/Components/Container";
import FlashMessage from "@/Components/FlashMessage";
import ProductDetailDescription from "@/Components/Product/Partials/ProductDetailDescription";
import ProductDetailImageHolder from "@/Components/Product/Partials/ProductDetailImageHolder";
import ProductList from "@/Components/Product/ProductList";
import MainLayout from "@/Layouts/MainLayout";
import React from "react";

const ProductDetail = ({ product, flash, relatedProducts }) => {
    console.log(product);
    return (
        <>
            <div>
                <Container className="grid md:grid-cols-2 grid-cols-1 gap-8 items-center">
                    <ProductDetailImageHolder image={product.image} />
                    <ProductDetailDescription
                        product_name={product.product_name}
                        product_price={product.price}
                        product_brand={product.brand.brand_name}
                        product_stock={product.stock}
                        product_id={product.id}
                    />
                </Container>
                <ProductList title="Mungkin Anda Suka" data={relatedProducts} />
                {flash.message && <FlashMessage message={flash.message} />}
            </div>
        </>
    );
};

ProductDetail.layout = (page) => (
    <MainLayout
        data={page.props.product}
        title="Product Detail"
        children={page}
    />
);

export default ProductDetail;
