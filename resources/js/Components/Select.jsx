import React from "react";
import InputLabel from "./InputLabel";

const Select = ({ title, name }) => {
    return (
        <div className="flex flex-col w-full space-y-2">
            <InputLabel>{title}</InputLabel>
            <select
                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                name={name}
            >
                {children}
            </select>
        </div>
    );
};

export default Select;
