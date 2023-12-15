import FormInput from "@/Components/FormInput";
import { useForm } from "@inertiajs/react";
import React from "react";

const DashboardProductSearch = () => {
    const { data, setData, get } = useForm({
        search: "",
    });

    const changeHandler = (e) => {
        setData(e.target.name, e.target.value);
    };

    const searchHandler = (e) => {
        e.preventDefault();
        get(route("dashboard.product.index"));
    };
    return (
        <form onSubmit={searchHandler}>
            <FormInput
                onChange={changeHandler}
                name="search"
                type="text"
                placeholder="Search"
                value={data.search}
            />
        </form>
    );
};

export default DashboardProductSearch;
