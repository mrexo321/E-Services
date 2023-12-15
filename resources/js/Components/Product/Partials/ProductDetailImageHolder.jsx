import React from "react";

const ProductDetailImageHolder = ({ image }) => {
    return (
        <div>
            <img className=" w-full md:w-3/4" src={image} alt="" />
        </div>
    );
};

export default ProductDetailImageHolder;
