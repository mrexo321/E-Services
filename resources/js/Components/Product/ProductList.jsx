import React from "react";
import ProductBox from "./Partials/ProductBox";
import Container from "../Container";

const ProductList = ({ title, data }) => {
    console.log(data);
    return (
        <Container>
            <h1 className="py-4 text-2xl text-center md:text-start">
                {title} {data ? `(${data.length})` : ""}
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-1">
                {data.map((product, key) => (
                    <ProductBox
                        key={key}
                        link={route("product.show", product.slug)}
                        title={product.product_name}
                        image={product.image}
                        price={product.price.toLocaleString("id")}
                        // totalItems={10}
                    />
                ))}
            </div>
        </Container>
    );
};

export default ProductList;
