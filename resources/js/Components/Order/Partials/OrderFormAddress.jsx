import React, { createContext, useEffect, useState } from "react";
import OrderFormSelect from "./OrderFormSelect";
import FormInput from "@/Components/FormInput";
import { useForm } from "@inertiajs/react";

// export const orderFormContext = createContext();
const OrderFormAddress = ({ provinciesData, citiesData }) => {
    const [provinces, setProvinces] = useState([]);
    const [cities, setCities] = useState([]);
    const { data, setData } = useForm({
        name: "",
        phone: "",
        email: "",
        address: "",
        province: "",
        city: "",
    });

    const changeHandler = (e) => {
        setData(e.target.name, e.target.value);
    };

    useEffect(() => {
        setProvinces(provinciesData);
    }, []);

    const handleProvinceChange = (e) => {
        const id_province = e.target.value;
        const filteredCities = citiesData.filter(
            (city) => city.province_id === id_province
        );
        setCities(filteredCities);
    };
    return (
        <orderFormContext.Provider value={data}>
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
                        {provinces.map((province) => (
                            <option
                                key={province.province_id}
                                value={province.province_id}
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
        </orderFormContext.Provider>
    );
};

export default OrderFormAddress;
