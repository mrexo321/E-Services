import { Link } from "@inertiajs/react";
import React from "react";

const FooterNavigationLink = ({ children }) => {
    return (
        <Link className="text-base w-fit text-gray-600 font-semibold">
            {children}
        </Link>
    );
};

export default FooterNavigationLink;
