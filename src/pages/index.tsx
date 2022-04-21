import type { NextPage } from "next";
import Link from "next/link";

import { collection, DocumentData, FirestoreError } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { NativeSelect } from "@mantine/core";

import { HeadButton } from "../components/button/HeadButton";
import { SimpleInvoice } from "@component/SimpleInvoice";
import { InputInvoice } from "@component/InputInvoice";

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
    return { id: d.id, invoice: d.data() };
  });

  return { data, loading, error };
};

const Home: NextPage = () => {
  const { data } = FirestoreCollection();
  return (
    <div className="h-screen bg-gray-800">
      <header className="max-w-8xl m-auto bg-yellow-200 p-5">
        <div className="flex flex-row">
          <div className="flex basis-1/4">
            <div>Invoices</div>
            <br />
            <div>There are total {data?.length} invoices</div>
          </div>
          <div className="basis-1/4" />
          <div className="flex basis-1/2">
            <NativeSelect
              placeholder="filter by status"
              data={[
                { value: "Draft", label: "Draft" },
                { value: "Paid", label: "Paid" },
                { value: "Pending", label: "Pending" },
                { value: "No-filter", label: "No-filter" },
              ]}
              className="mr-2"
              onChange={(event) => alert(event.currentTarget.value)}
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
          </div>
        </div>
      </header>
      <main className="m-auto max-w-5xl text-white">
        <SimpleInvoice data={data} />
      </main>
    </div>
  );
};

export default Home;
