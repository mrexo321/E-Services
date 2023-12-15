import React from "react";
import InvoiceHeaderBox from "./InvoiceHeaderBox";

const InvoiceHeader = ({
    unpaidInvoices,
    totalInvoices,
    expenses,
    totalOverdue,
}) => {
    return (
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 rounded-xl">
            <InvoiceHeaderBox title="Jumlah invoice" value={totalInvoices} />
            <InvoiceHeaderBox
                title="Jumlah Pengeluaran"
                value={`Rp. ${expenses.toLocaleString("id")}`}
            />
            <InvoiceHeaderBox
                title="Invoice Belum bayar"
                value={unpaidInvoices}
            />
            <InvoiceHeaderBox
                title="Total Belum dibayar"
                value={`Rp.${totalOverdue.toLocaleString("id")}`}
            />
        </div>
    );
};

export default InvoiceHeader;
