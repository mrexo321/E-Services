import React from "react";

const DashboardFormSelect = ({ title, onChange, name, children }) => {
    return (
        <div className="flex md:flex-row flex-col items-start md:items-center justify-between p-4 border-b-2">
            <label className="font-semibold">{title}</label>
            <select
                className="border-gray-300 md:w-[228px] focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full"
                name={name}
                onChange={onChange}
                id=""
            >
                {children}
            </select>
        </div>
    );
};

export default DashboardFormSelect;
