import React from "react";
import FooterNavigationLink from "./FooterNavigationLink";

const FooterCommunity = () => {
    return (
        <div className="flex flex-col gap-y-4">
            <h1 className="text-lg md:text-2xl font-semibold">Komunitas</h1>
            <FooterNavigationLink>Instagram</FooterNavigationLink>
            <FooterNavigationLink>Facebook</FooterNavigationLink>
            <FooterNavigationLink>WhatsApp</FooterNavigationLink>
        </div>
    );
};

export default FooterCommunity;
