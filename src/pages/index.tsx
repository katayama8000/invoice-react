import { useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";

import { collection, DocumentData, FirestoreError } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { NativeSelect } from "@mantine/core";

import { HeadButton } from "../components/button/HeadButton";
import { SimpleInvoice } from "@component/SimpleInvoice";
import { InputInvoice } from "@component/InputInvoice";

import { useRecoilState } from "recoil";
import { buttonColorState } from "@component/atoms";

export const FirestoreCollection = (): {
  // value: QuerySnapshot<DocumentData> | undefined;
  data: DocumentData[] | undefined;
  loading: boolean;
  error: FirestoreError | undefined;
} => {
  const [value, loading, error] = useCollection(collection(db, "invoice"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const data = value?.docs.map((d) => {
    return d.data();
  });

  return { data, loading, error };
};

const filteredInvoices = (x: string) => {};

const changeButtonColor = (color: string) => color;

const Home: NextPage = () => {
  const [buttonColor, setButtonColor] = useRecoilState(buttonColorState);
  const { data } = FirestoreCollection();

  const [invoice, setInvoice] = useState(data);

  return (
    <div className="h-screen bg-gray-800 ">
      <header className="max-w-8xl m-auto bg-yellow-200 p-5">
        <div className="flex flex-row">
          <div className="flex basis-1/4">
            <div>Invoices</div>
            <div>There are total {data?.length} invoices</div>
          </div>
          <div className="basis-1/4" />
          <div className="flex basis-1/2">
            <NativeSelect
              placeholder="Color"
              data={[
                { value: "red", label: "red" },
                { value: "pink", label: "pink" },
                { value: "grape", label: "grape" },
                { value: "violet", label: "violet" },
                { value: "indigo", label: "indigo" },
                { value: "cyan", label: "cyan" },
                { value: "teal", label: "teal" },
                { value: "green", label: "green" },
                { value: "lime", label: "lime" },
                { value: "yellow", label: "yellow" },
                { value: "orange", label: "orange" },
              ]}
              className="mr-2"
              onChange={(event) =>
                setButtonColor(changeButtonColor(event.target.value))
              }
            />
            <NativeSelect
              placeholder="filter by status"
              data={[
                { value: "Draft", label: "Draft" },
                { value: "Paid", label: "Paid" },
                { value: "Pending", label: "Pending" },
                { value: "No-filter", label: "No-filter" },
              ]}
              className="mr-2"
              onChange={(event) => filteredInvoices(event.currentTarget.value)}
            />
            <InputInvoice />
            <Link href="/signup">
              <a>
                <HeadButton title="Sign up" className="mx-2" />
              </a>
            </Link>
            <Link href="/signin">
              <a>
                <HeadButton title="Sign in" className="mx-2" />
              </a>
            </Link>
            <HeadButton title="個人情報" className="mx-2" />
            <Link href="/sample">
              <a>
                <HeadButton title="検証画面" className="mx-2" />
              </a>
            </Link>
          </div>
        </div>
      </header>
      {data?.length !== 0 ? (
        <>
          <main className="m-auto max-w-5xl text-white">
            <SimpleInvoice data={data} />
          </main>
        </>
      ) : (
        <div className="text-white">
          <h1>There is nothing here</h1>
          <div>create a new invoice by clicking the New Invoice button </div>
        </div>
      )}
    </div>
  );
};

export default Home;
