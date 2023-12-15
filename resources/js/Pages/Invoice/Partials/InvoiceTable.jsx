import React, { useState, useEffect } from "react";
import InvoiceCategoryList from "./InvoiceCategoryList";
import InvoiceTableDataList from "./InvoiceTableDataList";
import FormInput from "@/Components/FormInput";

const InvoiceTable = ({ invoices, paidInvoices, unpaidInvoices }) => {
    const [search, setSearch] = useState("");
    const [invoicesData, setInvoicesData] = useState([]);

    useEffect(() => {
        setInvoicesData(invoices);
    }, []);

    const allInvoicesData = (e) => {
        e.preventDefault();
        setInvoicesData(invoices);
    };

    const paidInvoicesData = (e) => {
        e.preventDefault();
        setInvoicesData(paidInvoices);
    };
    const unpaidInvoicesData = (e) => {
        e.preventDefault();
        setInvoicesData(unpaidInvoices);
    };
    return (
        <div className="p-8 flex flex-col gap-4 rounded-xl bg-white min-h-screen overflow-y-auto">
            <div className="flex md:flex-row flex-col justify-between items-center">
                <div className="flex items-center gap-12">
                    <InvoiceCategoryList
                        className="bg-gray-500 text-white"
                        title="all"
                        value={invoices.length}
                        onClick={allInvoicesData}
                    />
                    <InvoiceCategoryList
                        title="paid"
                        value={paidInvoices.length}
                        onClick={paidInvoicesData}
                    />
                    <InvoiceCategoryList
                        title="unpaid"
                        value={unpaidInvoices.length}
                        onClick={unpaidInvoicesData}
                    />
                </div>
                <div className="md:w-fit w-full">
                    <FormInput
                        onChange={(e) =>
                            setSearch(e.target.value.toLowerCase())
                        }
                        type="search"
                        name="seach"
                        id="search"
                    />
                </div>
            </div>
            <div>
                <InvoiceTableDataList search={search} invoices={invoicesData} />
            </div>
        </div>
    );
};

export default InvoiceTable;
