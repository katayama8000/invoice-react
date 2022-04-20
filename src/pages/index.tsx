import { Button, TextInput, Group, NumberInput, Drawer } from "@mantine/core";
import type { NextPage } from "next";
import { useState } from "react";
import { HeadButton } from "../components/button/HeadButton";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";
import Link from "next/link";

import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

import { SimpleInvoice } from "@component/SimpleInvoice";
import { InputInvoice } from "@component/InputInvoice";

const schema = z.object({
  name: z.string().min(2, { message: "Name should have at least 2 letters" }),
  email: z.string().email({ message: "Invalid email" }),
  age: z
    .number()
    .min(18, { message: "You must be at least 18 to create an account" }),
});

const Home: NextPage = () => {
  const func = async () => {
    const docRef = doc(db, "invoice", "4ajkdekTQljlysdA3BXd");
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
  };
  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      name: "",
      email: "",
      age: 20,
    },

    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "this email is not valid",
    },
  });
  const [invoices, setInvoices] = useState<number>(0);
  return (
    <div className="h-screen bg-gray-800">
      <header className="max-w-8xl m-auto bg-yellow-200 p-5">
        <div className="flex flex-row">
          <div className="flex basis-1/4">
            <div>Invoices</div>
            <br />
            <div>There are total {invoices} invoices</div>
          </div>
          <div className="basis-1/2" />
          <div className="flex basis-1/4">
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
        <SimpleInvoice />
        <SimpleInvoice />
        <SimpleInvoice />
        <SimpleInvoice />
        <h1 onClick={func}>sample</h1>
        <form
          onSubmit={form.onSubmit((values) =>
            console.log(JSON.stringify(values))
          )}
        >
          <TextInput
            variant="unstyled"
            placeholder="your@email.com"
            {...form.getInputProps("name")}
            classNames={{
              input: "bg-green-400",
              unstyledVariant: "bg-yellow-300",
            }}
          />
          <Group position="right" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </main>
    </div>
  );
};

export default Home;
