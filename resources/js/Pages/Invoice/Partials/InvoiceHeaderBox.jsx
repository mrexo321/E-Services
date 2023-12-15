import React from "react";

const InvoiceHeaderBox = ({ title, value }) => {
    return (
        <div className="p-6 bg-white rounded-xl">
            <span className="text-sm text-gray-700">{title}</span>
            <h1 className="font-semibold md:text-2xl text-lg">
                {value.toLocaleString("id")}
            </h1>
        </div>
    );
};

export default InvoiceHeaderBox;
