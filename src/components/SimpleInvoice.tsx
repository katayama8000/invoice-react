import React, { useState } from "react";
import { StatusButton } from "@component/button/StatusButton";
import { DocumentData } from "firebase/firestore";
import type { data, invoiceItemList } from "../type/firebaseType";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import { ComfirmPaidModal } from "@component/modal/ComfirmPaidModal";

type Props = {
  data: DocumentData[] | undefined;
};

export const SimpleInvoice: React.VFC<Props> = ({ data }) => {
  const [modalFlag, setModalFlag] = useState(false);
  const toggleStatus = () => {
    const temp = doc(db, "invoice", "9b0HKpThXthUVlIbSvn4");
    data?.forEach((invoice) => {
      if (invoice.invoicePaid === true) {
        setModalFlag(true);
        updateDoc(temp, {
          invoicePaid: false,
          invoiceDraft: true,
          invoicePending: false,
        });
      } else if (invoice.invoiceDraft === true) {
        setModalFlag(true);
        updateDoc(temp, {
          invoicePaid: false,
          invoiceDraft: false,
          invoicePending: true,
        });
      } else if (invoice.invoicePending === true) {
        setModalFlag(true);
        updateDoc(temp, {
          invoicePaid: true,
          invoiceDraft: false,
          invoicePending: false,
        });
      }
    });
  };
  return (
    <div>
      {data?.map((invoice) => {
        return (
          <div
            key={invoice.invoiceId}
            className="mt-5 flex flex-row items-end justify-around rounded-3xl bg-gray-600 py-5 px-2"
          >
            <div>{invoice.invoiceId}</div>
            <div>{invoice.paymentDueDate}</div>
            <div>{invoice.clientName}</div>
            <div>${invoice.invoiceTotal}</div>
            <div
              onClick={() => {
                toggleStatus;
              }}
            >
              {invoice.invoicePaid && (
                <StatusButton
                  title="Paid"
                  onClick={toggleStatus}
                  modalFlag={modalFlag}
                />
              )}
              {invoice.invoiceDraft && (
                <StatusButton
                  title="Draft"
                  onClick={toggleStatus}
                  modalFlag={modalFlag}
                />
              )}
              {invoice.invoicePending && (
                <StatusButton
                  title="Pending"
                  onClick={toggleStatus}
                  modalFlag={modalFlag}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
