import Container from "@/Components/Container";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";
import DashboardProductBox from "./Partials/DashboardProductBox";
import FlashMessage from "@/Components/FlashMessage";
import FormInput from "@/Components/FormInput";

const DashboardProductIndex = ({ products, flash }) => {
    const [search, setSearch] = useState("");
    console.log(search);
    return (
        <>
            <div className="flex flex-col md:flex-row md:justify-between items-center py-4">
                <h1 className="md:p-6 p-2 text-gray-900 font-semibold text-lg">
                    List Product
                </h1>
                <FormInput
                    onChange={(e) => setSearch(e.target.value)}
                    name="search"
                    type="text"
                    placeholder="Search"
                />
            </div>
            {products.length > 0 ? (
                <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
                    {products
                        .filter((product) => {
                            return search.toLowerCase() === ""
                                ? product
                                : product.product_name
                                      .toLowerCase()
                                      .includes(search);
                        })
                        .map((product, key) => (
                            <DashboardProductBox
                                slug={product.slug}
                                key={key}
                                link={route("homepage")}
                                title={product.product_name}
                                image={product.image}
                                price={product.price.toLocaleString("id")}
                            />
                        ))}
                </div>
            ) : (
                <Container className="w-full justify-center flex items-center text-xl text-gray-600">
                    <h1>Produk Tidak Ada</h1>
                </Container>
            )}
            {flash.message && <FlashMessage message={flash.message} />}
        </>
    );
};

DashboardProductIndex.layout = (page) => (
    <AuthenticatedLayout
        titlePage="Products Pages"
        action="Tambah Produk"
        routeAction={route("dashboard.product.create")}
        headerTitle="Halaman Produk"
        user={page.props.auth.user}
        children={page}
    />
);

export default DashboardProductIndex;
