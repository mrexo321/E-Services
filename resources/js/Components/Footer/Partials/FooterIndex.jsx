import React from "react";
import FooterNavigationLink from "./FooterNavigationLink";

const FooterIndex = () => {
    return (
        <div className="flex flex-col gap-y-4">
            <h1 className="text-lg md:text-2xl font-semibold">Index</h1>
            <FooterNavigationLink>Beranda</FooterNavigationLink>
            <FooterNavigationLink>Produk</FooterNavigationLink>
            <FooterNavigationLink>Kontak</FooterNavigationLink>
        </div>
    );
};

export default FooterIndex;
