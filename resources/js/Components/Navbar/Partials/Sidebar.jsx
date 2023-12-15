import { Link } from "@inertiajs/react";
import { X } from "@phosphor-icons/react";
import { motion, stagger } from "framer-motion";
import React from "react";

const variants = {
    open: {
        opacity: 1,
        x: 0,
    },
    closed: {
        opacity: 0,
        x: -100,
    },
};

const Sidebar = ({ navMenu, state }) => {
    return (
        <motion.div
            initial={variants.closed}
            animate={state ? variants.open : variants.closed}
            transition={{ duration: 0.5 }}
            className="md:hidden flex flex-col fixed inset-x-0 top-0 h-full w-5/6 overflow-x-hidden bg-gray-100 py-2 overflow-y-auto"
        >
            <div className="text-center text-2xl border-b flex items-center justify-between px-4 py-2">
                <h1>E-SERVICES</h1>
                <X onClick={state} size={24} color="#000" />
            </div>
            <ul className="py-2 px-4 flex flex-col gap-y-4">
                {navMenu.map((menu) => (
                    <Link key={menu.brand_id}>
                        <motion.li
                            whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.3 },
                            }}
                        >
                            {menu.brand_name}
                        </motion.li>
                    </Link>
                ))}
            </ul>
        </motion.div>
    );
};

export default Sidebar;
