import React, { useState } from "react";
import Container from "../Container";
import NavigationLink from "../NavigationLink";
import { User } from "@phosphor-icons/react/dist/ssr";
import { Link, usePage } from "@inertiajs/react";
import { List, Basket, Receipt } from "@phosphor-icons/react";
import Sidebar from "./Partials/Sidebar";

const Navbar = ({ data }) => {
    const { cart } = usePage().props;
    const { navMenu } = usePage().props;
    const [open, setOpen] = useState(false);

    const openHandler = () => {
        setOpen((open) => !open);
    };
    return (
        <div className="border-b-2 sticky top-0 bg-white z-50 overflow-hidden">
            <Container className="space-y-5">
                <div className="flex items-center justify-between">
                    <button
                        onClick={openHandler}
                        className="md:invisible block rounded-full p-1"
                    >
                        <List size={32} color="#000" />
                    </button>
                    <Link
                        href={route("homepage")}
                        className=" text-2xl md:text-5xl"
                    >
                        E-SERVICES
                    </Link>
                    <div className="flex gap-x-4 items-center">
                        <NavigationLink href={route("login")}>
                            <User size={22} />
                        </NavigationLink>
                        <NavigationLink href={route("invoice.index")}>
                            <Receipt size={22} color="#000" />
                        </NavigationLink>
                        <NavigationLink
                            className="relative md:flex hidden"
                            href={route("cart.index")}
                        >
                            <Basket size={22} />
                            <div className="absolute rounded-full text-sm left-4 bottom-3 bg-red-500 text-white px-2">
                                {cart.total_item}
                            </div>
                        </NavigationLink>
                    </div>
                </div>
                <div className="hidden md:flex justify-evenly text-sm font-semibold text-gray-800">
                    {navMenu.map((menu, key) => (
                        <NavigationLink key={key}>
                            {menu.brand_name}
                        </NavigationLink>
                    ))}
                </div>
            </Container>

            {/* Sidebar */}
            {open && <Sidebar state={openHandler} navMenu={navMenu} />}

            {/* Product Detail Data Header */}
            {data && (
                <div className="py-2 border-t">
                    <Container className="flex justify-between items-center font-semibold md:text-xl md:p-0 px-2 text-base tracking-wide">
                        <h1>{data.product_name}</h1>
                        <h1 className="text-red-400">
                            Rp.{data.price.toLocaleString()}
                        </h1>
                    </Container>
                </div>
            )}
        </div>
    );
};

export default Navbar;
