import React from "react";

const InvoiceTableDataList = ({ search, invoices }) => {
    const orderStatus = {
        paid: "text-green-900 bg-green-400 bg-opacity-40",
        unpaid: "text-yellow-900 bg-yellow-400 bg-opacity-40",
    };

    return (
        <div className="relative w-full overflow-x-auto  shadow-md rounded-lg">
            <table className="table-auto w-full text-left">
                <thead className="text-xs text-gray-700 uppercase bg-gray-300">
                    <tr>
                        <th className="px-6 py-3">Kode Invoice</th>
                        <th className="px-6 py-3">Penerima</th>
                        <th className="px-6 py-3">Jumlah</th>
                        <th className="px-6 py-3">Tanggal</th>
                        <th className="px-6 py-3">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {invoices
                        .filter((invoice) => {
                            const filterByRecipient = invoice.order.recipient
                                .toLowerCase()
                                .includes(search);

                            const filterByCode = invoice.invoice_code
                                .toLowerCase()
                                .includes(search);

                            return search.toLowerCase() === ""
                                ? invoice
                                : filterByRecipient || filterByCode;
                        })
                        .map((invoice) => {
                            const invoiceDate = new Date(
                                invoice.order.created_at
                            );
                            const formattedDate = new Intl.DateTimeFormat(
                                "us-US",
                                {
                                    year: "numeric",
                                    month: "numeric",
                                    day: "numeric",
                                    hour: "numeric",
                                    minute: "numeric",
                                    hour12: false,
                                }
                            ).format(invoiceDate);
                            return (
                                <tr
                                    key={invoice.invoice_code}
                                    className="bg-white border-b text-black table-row"
                                >
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                                    >
                                        {invoice.invoice_code}
                                    </th>
                                    <td className="px-6 py-4">
                                        {invoice.order.recipient}
                                    </td>
                                    <td className="px-6 py-4">
                                        Rp.
                                        {invoice.total_amount.toLocaleString(
                                            "id"
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        {formattedDate}
                                    </td>
                                    <td>
                                        <span
                                            className={`px-5 py-2 rounded-full w-full text-sm ${
                                                invoice.order.status === "paid"
                                                    ? orderStatus.paid
                                                    : orderStatus.unpaid
                                            } `}
                                        >
                                            {invoice.order.status}
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
};

export default InvoiceTableDataList;
