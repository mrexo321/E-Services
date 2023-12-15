import TextInput from "@/Components/TextInput";
import React from "react";

const DashboardFormInput = ({ title, type, name, ...props }) => {
    return (
        <div className="flex md:flex-row flex-col md:items-center sm:w-full items-start justify-between p-4 border-b-2">
            <label className="font-semibold">{title}</label>
            <TextInput {...props} type={type} name={name} />
        </div>
    );
};

export default DashboardFormInput;
