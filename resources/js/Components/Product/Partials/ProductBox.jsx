import ImageHolder from "@/Components/ImageHolder";
import { Link } from "@inertiajs/react";
import React from "react";

const ProductBox = ({ link, image, title, price }) => {
    return (
        <Link href={link}>
            <ImageHolder className="rounded-lg" src={image} />
            <div className="flex flex-col gap-y-8 leading-relaxed text-center">
                <span className="text-gray-500 text-sm md:text-lg ">
                    {title}
                </span>
                <span className="text-red-500 text-base md:text-xl">
                    Rp.{price}
                </span>
            </div>
        </Link>
    );
};

export default ProductBox;
