import { Drawer } from "@mantine/core";
import React, { useState } from "react";
import { HeadButton } from "@component/button/HeadButton";
import { TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

export const InputInvoice = () => {
  const [opened, setOpened] = useState(false);
  const form = useForm({
    initialValues: {
      StreetAddress: "",
      City: "",
      ZipCode: "",
      Country: "",
    },
  });
  return (
    <div>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        closeOnEscape={true}
        padding="xl"
        size="45%"
        withCloseButton={false}
        lockScroll={false}
      >
        <div>New Invoice</div>
        <div>Bill From</div>
        <div className="flex">
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <TextInput
              label="Street Address"
              {...form.getInputProps("StreetAddress")}
            />
            <div className="mt-5 flex flex-row">
              <TextInput
                label="City"
                {...form.getInputProps("StreetAddress")}
              />
              <TextInput
                className="mx-4"
                label="Zip Code"
                {...form.getInputProps("StreetAddress")}
              />
              <TextInput
                className="mx-4"
                label="Country"
                {...form.getInputProps("StreetAddress")}
              />
            </div>
          </form>
        </div>
        <div>Bill From</div>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
            label="select clients"
            {...form.getInputProps("StreetAddress")}
          />
          <TextInput
            label="Client's Name"
            {...form.getInputProps("StreetAddress")}
          />
          <TextInput
            label="Client's Email"
            {...form.getInputProps("StreetAddress")}
          />
          <TextInput
            label="Street Address"
            {...form.getInputProps("StreetAddress")}
          />
          <div className="mt-5 flex flex-row">
            <TextInput label="City" {...form.getInputProps("StreetAddress")} />
            <TextInput
              className="mx-4"
              label="Zip Code"
              {...form.getInputProps("StreetAddress")}
            />
            <TextInput
              className="mx-4"
              label="Country"
              {...form.getInputProps("StreetAddress")}
            />
          </div>
        </form>
        <br />
        <div>
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          <br />
        </div>
        <div>
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          <br />
        </div>
        <div>
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          <br />
        </div>
        <div>
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          <br />
        </div>
        <div className="mt-5 flex flex-row">
          <TextInput
            label="invoice Date"
            {...form.getInputProps("StreetAddress")}
          />
          <TextInput
            className="mx-4"
            label="PayMent Due"
            {...form.getInputProps("StreetAddress")}
          />
        </div>
        <TextInput
          className="mx-4"
          label="PayMent Term"
          {...form.getInputProps("StreetAddress")}
        />
      </Drawer>
      <HeadButton
        onClick={() => setOpened(true)}
        title="New Invoice"
        className="mx-2"
      />
    </div>
  );
};
