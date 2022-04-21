import React from "react";
import { StatusButton } from "@component/button/StatusButton";
import { DocumentData } from "firebase/firestore";

type Props = {
  data: DocumentData[] | undefined;
};

export const SimpleInvoice: React.VFC<Props> = ({ data }) => {
  return (
    <div>
      {data?.map((item) => {
        return (
          <div
            key={item.id}
            className="mt-5 flex flex-row items-end justify-around rounded-3xl bg-gray-600 py-5 px-2"
          >
            <div>{item.invoice.invoiceId}</div>
            <div>{item.invoice.paymentDueDate}</div>
            <div>{item.invoice.clientName}</div>
            <div>${item.invoice.invoiceTotal}</div>
            {item.invoice.invoicePaid && <StatusButton title="Paid" />}
            {item.invoice.invoiceDraft && <StatusButton title="Draft" />}
            {item.invoice.invoicePending && <StatusButton title="Pending" />}
          </div>
        );
      })}
    </div>
  );
};
