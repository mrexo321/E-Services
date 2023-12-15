import React from "react";

const ImageHolder = ({ className, src, alt = "" }) => {
    return (
        <img
            className={`md:w-[300px] md:h-[300px] w-[130px] h-[130px] max-w-full flex-shrink-0 flex ${className}`}
            src={src}
            alt={alt}
        />
    );
};

export default ImageHolder;
