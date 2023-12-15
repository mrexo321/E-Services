import Container from "@/Components/Container";
import MainLayout from "@/Layouts/MainLayout";
import React from "react";
import InvoiceHeader from "./Partials/InvoiceHeader";
import InvoiceTable from "./Partials/InvoiceTable";

const InvoiceIndex = ({ invoicesUser, totalInvoices }) => {
    const unpaidInvoices = invoicesUser.filter(
        (invoice) => invoice.order.status == "unpaid"
    );

    const paidInvoices = invoicesUser.filter(
        (invoice) => invoice.order.status == "paid"
    );
    const totalOverdue = unpaidInvoices.reduce((accumulator, invoice) => {
        return accumulator + invoice.total_amount;
    }, 0);

    const expenses = invoicesUser.reduce((accumulator, invoice) => {
        return accumulator + invoice.total_amount;
    }, 0);
    return (
        <div className="bg-gray-200">
            <Container className="py-4 space-y-6 max-w-5xl">
                <section>
                    <InvoiceHeader
                        totalInvoices={invoicesUser.length}
                        unpaidInvoices={unpaidInvoices.length}
                        expenses={expenses}
                        totalOverdue={totalOverdue}
                    />
                </section>
                <section>
                    <InvoiceTable
                        invoices={invoicesUser}
                        paidInvoices={paidInvoices}
                        unpaidInvoices={unpaidInvoices}
                    />
                </section>
            </Container>
        </div>
    );
};

InvoiceIndex.layout = (page) => (
    <MainLayout title="Halaman Invoice" children={page} />
);

export default InvoiceIndex;
