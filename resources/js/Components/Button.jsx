import React from "react";

const Button = ({ children, className, ...props }) => {
    return (
        <button
            {...props}
            className={`w-full font-semibold rounded-md py-1.5 + ${className} `}
        >
            {children}
        </button>
    );
};

export default Button;
