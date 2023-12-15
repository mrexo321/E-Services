import Container from "@/Components/Container";
import FormInput from "@/Components/FormInput";
import InsideCartItemList from "@/Components/InsideCartItemList";
import OrderFormSelect from "@/Components/Order/Partials/OrderFormSelect";
import OrderPriceDescription from "@/Components/Order/Partials/OrderPriceDescription";
import MainLayout from "@/Layouts/MainLayout";
import { useForm } from "@inertiajs/react";
import React, { useState, useEffect, createContext } from "react";

export const orderFormContext = createContext();

const OrderIndex = ({ items, provincesData, citiesData }) => {
    const [provinces, setProvinces] = useState([]);
    const [cities, setCities] = useState([]);

    let subTotal = 0;
    let total = 0;
    items.map((item) => {
        subTotal = item.product.price * item.quantity;
        total += subTotal;
    });

    const { data, setData } = useForm({
        name: "",
        phone: "",
        email: "",
        address: "",
        province: "",
        city: "",
        total_amount: total,
    });

    const changeHandler = (e) => {
        setData(e.target.name, e.target.value);
    };

    useEffect(() => {
        setProvinces(provincesData);
    }, []);

    const handleProvinceChange = (e) => {
        const province_name = e.target.value;
        const filteredCities = citiesData.filter(
            (city) => city.province === province_name
        );
        setData("province", e.target.value);
        setCities(filteredCities);
    };

    return (
        <Container className="text-base w-full md:flex items-start gap-x-4 min-h-screen">
            <div className="py-8 text-sm md:text-lg bg-[#fafafa] flex flex-col  gap-y-6 md:w-2/3 px-2 md:overflow-y-auto md:h-screen">
                <div className="space-y-2">
                    <h1 className="font-semibold md:text-start text-center">
                        Dikirim ke
                    </h1>
                    <div className="space-y-4 text-base py-4">
                        <div className="h-px border"></div>
                        <h1 className="font-semibold md:text-start text-center ">
                            Alamat Pengiriman
                        </h1>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                        <FormInput
                            onChange={changeHandler}
                            value={data.name}
                            title="Nama"
                            name="name"
                            type="text"
                        />
                        <FormInput
                            onChange={changeHandler}
                            value={data.phone}
                            title="Nomor Ponsel"
                            name="phone"
                            type="tel"
                        />
                        <FormInput
                            onChange={changeHandler}
                            value={data.email}
                            title="Email"
                            name="email"
                            type="email"
                        />
                        <FormInput
                            onChange={changeHandler}
                            value={data.address}
                            title="Alamat"
                            name="address"
                            type="text"
                        />
                        <OrderFormSelect
                            onChange={handleProvinceChange}
                            title="Provinsi"
                            name="province"
                        >
                            {provincesData.map((province) => (
                                <option
                                    key={province.province_id}
                                    value={province.province}
                                >
                                    {province.province}
                                </option>
                            ))}
                        </OrderFormSelect>
                        <OrderFormSelect
                            onChange={changeHandler}
                            title="Daerah"
                            name="city"
                        >
                            {cities.map((city) => (
                                <option
                                    key={city.city_id}
                                    value={city.type + ` ` + city.city_name}
                                >
                                    {city.type} - {city.city_name}
                                </option>
                            ))}
                        </OrderFormSelect>
                    </div>
                </div>
                <InsideCartItemList
                    title="Daftar Produk"
                    subtitle=""
                    items={items}
                />
            </div>
            <orderFormContext.Provider value={data}>
                <OrderPriceDescription items={items} />
            </orderFormContext.Provider>
        </Container>
    );
};

OrderIndex.layout = (page) => <MainLayout children={page} />;

export default OrderIndex;
