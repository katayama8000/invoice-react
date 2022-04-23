import { Button, Drawer, Group } from "@mantine/core";
import React, { useState } from "react";
import { HeadButton } from "@component/button/HeadButton";
import { TextInput } from "@mantine/core";
import { formList, useForm } from "@mantine/form";
import { addDoc, collection } from "firebase/firestore";
import { uid } from "uid";
//import { v4 as uuidv4 } from "uuid";
import { db } from "../../config/firebase";

export const InputInvoice = () => {
  const [opened, setOpened] = useState(false);
  const [val, setVal] = useState(0);
  const form = useForm({
    initialValues: {
      billerStreetAddress: "",
      billerCity: "",
      billerZipCode: "",
      billerCountry: "",
      selectedClients: "",
      clientName: "",
      clientEmail: "",
      clientStreetAddress: "",
      clientCity: "",
      clientZipCode: "",
      clientCountry: "",
      invoiceDate: "",
      paymentDueDate: "",
      paymentTerms: "",
      productDescription: "",
      invoiceItemList: formList([
        { id: "", itemName: "", qty: "", price: "", total: 0 },
      ]),
    },
  });

  const fields = form.values.invoiceItemList.map((_, index: number) => (
    <Group key={index}>
      <div className="mt-5 flex flex-row">
        <br />
        <TextInput
          label="Item Name"
          {...form.getListInputProps("invoiceItemList", index, "itemName")}
        />
        <TextInput
          className="mx-4"
          label="Qty"
          {...form.getListInputProps("invoiceItemList", index, "qty")}
        />
        <TextInput
          label="Price"
          {...form.getListInputProps("invoiceItemList", index, "price")}
        />
        <TextInput
          className="mx-4"
          label="Total"
          {...form.getListInputProps("invoiceItemList", index, "total")}
        />
      </div>
    </Group>
  ));
  return (
    <div>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        closeOnEscape={true}
        padding="xl"
        size="80%"
        withCloseButton={false}
        lockScroll={false}
      >
        <div>New Invoice</div>
        <div>Bill From</div>
        <div className="flex">
          <form
            onSubmit={form.onSubmit(async (values) => {
              await addDoc(collection(db, "invoice"), {
                // invoiceId: uid(6),
                // billerStreetAddress: values.billerStreetAddress,
                // billerCity: values.billerCity,
                // billerZipCode: values.billerZipCode,
                // billerCountry: values.billerCountry,
                // clientName: values.clientName,
                // clientEmail: values.clientEmail,
                // clientStreetAddress: values.clientStreetAddress,
                // clientCity: values.clientCity,
                // clientZipCode: values.clientZipCode,
                // clientCountry: values.clientCountry,
                // invoiceDate: values.invoiceDate,
                // invoiceDateUnix: values.invoiceDateUnix,
                // paymentTerms: values.paymentTerms,
                // paymentDueDate: values.paymentDueDate,
                // paymentDueDateUnix: values.paymentDueDateUnix,
                // productDescription: values.productDescription,
                // invoiceItemList: values.invoiceItemList,
                // invoiceTotal: values.invoiceTotal,
                // invoicePending: values.invoicePending,
                // invoiceDraft: values.invoiceDraft,
                // invoicePaid: null,
              });
              console.log(values);
            })}
          >
            <TextInput
              label="Street Address"
              {...form.getInputProps("billerStreetAddress")}
            />
            <div className="mt-5 flex flex-row">
              <TextInput label="City" {...form.getInputProps("billerCity")} />
              <TextInput
                className="mx-4"
                label="Zip Code"
                {...form.getInputProps("billerZipCode")}
              />
              <TextInput
                label="Country"
                {...form.getInputProps("billerCountry")}
              />
            </div>
            <div>Bill From</div>
            <div className="mt-5 flex flex-row">
              <TextInput
                label="select clients"
                {...form.getInputProps("selectedClients")}
              />
              <TextInput
                label="Client's Name"
                {...form.getInputProps("clientName")}
              />
              <TextInput
                label="Client's Email"
                {...form.getInputProps("clientEmail")}
              />
              <TextInput
                label="Street Address"
                {...form.getInputProps("clientStreetAddress")}
              />
            </div>
            <div className="mt-5 flex flex-row">
              <TextInput label="City" {...form.getInputProps("clientCity")} />
              <TextInput
                className="mx-4"
                label="Zip Code"
                {...form.getInputProps("clientZipCode")}
              />
              <TextInput
                label="Country"
                {...form.getInputProps("clientCountry")}
              />
            </div>
            <div className="mt-5 flex flex-row">
              <TextInput
                label="invoice Date"
                {...form.getInputProps("invoiceDate")}
              />
              <TextInput
                className="mx-4"
                label="PayMent Due"
                {...form.getInputProps("paymentDueDate")}
              />
              <TextInput
                label="PayMent Term"
                {...form.getInputProps("paymentTerms")}
              />
              <TextInput
                // value={val}
                className="mx-4"
                label="Product Description"
                {...form.getInputProps("productDescription")}
              />
            </div>
            <h5>Item List</h5>
            <div>{fields}</div>
            <Button
              onClick={() => {
                form.addListItem("invoiceItemList", {
                  id: "",
                  itemName: "",
                  qty: "",
                  price: "",
                  total: 0,
                });
              }}
            >
              Add employee
            </Button>
            <Group position="right" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </form>
        </div>
      </Drawer>
      <HeadButton
        onClick={() => setOpened(true)}
        title="New Invoice"
        className="mx-2"
      />
    </div>
  );
};
