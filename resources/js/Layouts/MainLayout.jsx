import React, { useEffect } from "react";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import { Head } from "@inertiajs/react";
import { WhatsappLogo } from "@phosphor-icons/react";

const MainLayout = ({ children, title = "", data }) => {
    useEffect(() => {
        const clientKey = window.clientKey;
        const snapScript = "https://app.sandbox.midtrans.com/snap/snap.js";
        const script = document.createElement("script");
        script.src = snapScript;
        script.setAttribute("data-client-key", clientKey);
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.removeChild(script);
        };
    }, []);
    return (
        <div className="flex flex-col min-h-screen font-poppins">
            <Head title={title} />
            <Navbar data={data} />
            <div className="flex-1">{children}</div>
            <Footer />
            <div>
                <a
                    href="https://wa.me/628888730173"
                    className="fixed z-50 bottom-20 right-2 md:bottom-10 md:right-10 p-2 bg-green-400 rounded-full shadow-lg shadow-green-400 "
                >
                    <WhatsappLogo color="#fff" size={48} />
                </a>
            </div>
        </div>
    );
};

export default MainLayout;
