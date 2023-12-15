import { Link } from "@inertiajs/react";
import React from "react";

const NavigationLink = ({ children, className, href }) => {
    return (
        <Link
            href={href}
            className={`${className} + capitalize hover:underline decoration-gray-800 decoration-2 transition ease-in-out duration-300 `}
        >
            {children}
        </Link>
    );
};

export default NavigationLink;
