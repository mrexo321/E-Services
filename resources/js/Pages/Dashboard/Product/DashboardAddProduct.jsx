import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useEffect, useState } from "react";
import DashboardAddForm from "../components/DashboardAddForm";
import DashboardFormInput from "../components/DashboardFormInput";
import { useForm } from "@inertiajs/react";
import DashboardFormSelect from "../components/DashboardFormSelect";
import Button from "@/Components/Button";
import PreviewImageHolder from "../components/PreviewImageHolder";

const DashboardAddProduct = ({ brands }) => {
    // state untuk memunculkan overview gambar
    const [previewImage, setPreviewImage] = useState(null);

    // list request untuk form
    const { data, setData, post, reset } = useForm({
        product_name: "",
        product_brand: "",
        product_price: "",
        product_stock: "",
        product_image: "",
        product_slug: "",
    });

    //file handler untuk form data
    const handleFile = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData("product_image", file);
            const imageUrl = URL.createObjectURL(file);
            setPreviewImage(imageUrl);
        }
    };
    // Change handler untuk input form
    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    // Submit form
    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("product_image", data.product_image);
        post(route("dashboard.product.store"), formData);
        reset();
    };

    // Clear input

    const clearInput = (e) => {
        e.preventDefault();
        setPreviewImage(null);
        reset();
    };
    useEffect(() => {
        reset();
    }, []);
    console.log(data.product_image);
    return (
        <form
            className="md:text-base text-sm"
            onSubmit={submitHandler}
            encType="multipart/form-data"
        >
            <DashboardAddForm
                title="Tambahkan Produk Baru"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, odio."
            >
                <DashboardFormInput
                    className="md:w-56 w-full"
                    onChange={handleChange}
                    value={data.product_name}
                    title="Nama Produk"
                    type="text"
                    name="product_name"
                />
                <DashboardFormSelect
                    className="md:w-56 w-full"
                    onChange={handleChange}
                    name={"product_brand"}
                    title="Nama Brand"
                >
                    <option disabled>-- List Brand --</option>
                    {brands.map((brand) => (
                        <option
                            className="w-full"
                            key={brand.id}
                            value={brand.id}
                        >
                            {brand.brand_name}
                        </option>
                    ))}
                </DashboardFormSelect>
                <DashboardFormInput
                    className="md:w-56 w-full"
                    onChange={handleChange}
                    title="Harga Produk"
                    type="number"
                    name="product_price"
                    value={data.product_price}
                />
                <DashboardFormInput
                    className="md:w-56 w-full"
                    onChange={handleChange}
                    title="Stok Produk"
                    value={data.product_stock}
                    type="number"
                    name="product_stock"
                />
                <DashboardFormInput
                    title="Gambar Produk"
                    onChange={handleFile}
                    type="file"
                    name="product_image"
                    className="text-slate-500 md:w-56 w-full file:cursor-pointer file:w-full file:p-2 file:rounded file:border-0
                                file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-blue-700
                                hover:file:bg-violet-100"
                />
                {previewImage && (
                    <PreviewImageHolder previewImage={previewImage} />
                )}
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

DashboardAddProduct.layout = (page) => (
    <AuthenticatedLayout
        titlePage="Products Pages"
        headerTitle="Halaman Tambah Produk"
        user={page.props.auth.user}
        children={page}
    />
);

export default DashboardAddProduct;
