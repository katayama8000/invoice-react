import React from "react";
import { SignButton } from "@component/button/SignButton";
import { PasswordInput, Group, Button, Box, TextInput } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { NextPage } from "next";

const SignUp: NextPage = () => {
  const form = useForm({
    initialValues: {
      email: "",
      password: "secret",
      confirmPassword: "sevret",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });

  return (
    <div className="h-screen bg-gray-800">
      <div className="m-auto mt-36 w-1/5">
        <form onSubmit={form.onSubmit((values) => alert(values))}>
          <TextInput
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />
          <PasswordInput
            mt="sm"
            label="Password"
            placeholder="Password"
            {...form.getInputProps("password")}
          />
          <PasswordInput
            mt="sm"
            label="Confirm password"
            placeholder="Confirm password"
            {...form.getInputProps("confirmPassword")}
          />
          <div className="mt-5 text-center">
            <Button type="submit">sign up</Button>
            <SignButton type="submit" title="sign up" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
