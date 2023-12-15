import InputLabel from "@/Components/InputLabel";
import React from "react";

const OrderFormSelect = ({ title, name, children, onChange }) => {
    return (
        <div className="flex flex-col w-full space-y-2">
            <InputLabel>{title}</InputLabel>
            <select
                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                onChange={onChange}
                name={name}
                id=""
            >
                {children}
            </select>
        </div>
    );
};

export default OrderFormSelect;
