import FlashMessage from "@/Components/FlashMessage";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";

const DashboardBrandIndex = ({ flash }) => {
    return (
        <div>
            DashboardBrandIndex
            {flash.message && <FlashMessage message={flash.message} />}
        </div>
    );
};

DashboardBrandIndex.layout = (page) => (
    <AuthenticatedLayout
        titlePage="Brand Pages"
        action="Tambah Brand"
        routeAction={route("dashboard.brand.create")}
        headerTitle="Halaman Brand"
        user={page.props.auth.user}
        children={page}
    />
);

export default DashboardBrandIndex;
