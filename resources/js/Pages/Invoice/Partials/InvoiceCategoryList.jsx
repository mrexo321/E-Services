import React from "react";

const InvoiceCategoryList = ({ title, value, className, ...props }) => {
    return (
        <button {...props} className="flex items-center relative">
            <h1 className="md:text-lg text-sm font-semibold">{title}</h1>
            <div className="relative rounded-full text-sm bottom-4 bg-red-500 text-white px-2">
                {value}
            </div>
        </button>
    );
};

export default InvoiceCategoryList;
