import React from "react";
import DashboardAddForm from "../components/DashboardAddForm";
import DashboardFormInput from "../components/DashboardFormInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Button from "@/Components/Button";
import { useForm } from "@inertiajs/react";

const DashboardAddBrand = () => {
    const { data, setData, post, reset } = useForm({
        brand_name: "",
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    // Clear Inputan
    const clearInput = (e) => {
        e.preventDefault();
        reset();
    };

    // Submit Form
    const submitHandler = (e) => {
        e.preventDefault();
        post(route("dashboard.brand.store"));
    };

    return (
        <form className="md:text-base text-sm" onSubmit={submitHandler}>
            <DashboardAddForm
                title="Tambahkan Brand Baru"
                description="Menambahkan list list brand baru kepada halaman pengguna"
            >
                <DashboardFormInput
                    name="brand_name"
                    onChange={handleChange}
                    value={data.brand_name}
                    title="Nama Brand"
                />
                <div className="flex items-center justify-between text-white p-4 gap-4">
                    <Button onClick={clearInput} className="bg-red-400 w-32">
                        Clear
                    </Button>
                    <Button type="submit" className="bg-blue-500 w-full">
                        Tambah Produk
                    </Button>
                </div>
            </DashboardAddForm>
        </form>
    );
};

DashboardAddBrand.layout = (page) => (
    <AuthenticatedLayout
        titlePage="Brands Pages"
        headerTitle="Halaman Tambah Brand"
        user={page.props.auth.user}
        children={page}
    />
);

export default DashboardAddBrand;
