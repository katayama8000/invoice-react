import { useForm, formList } from "@mantine/form";
import {
  TextInput,
  Switch,
  Group,
  ActionIcon,
  Box,
  Text,
  Button,
  Code,
  Checkbox,
} from "@mantine/core";
import { Trash } from "tabler-icons-react";
import { NextPage } from "next";

const Sample: NextPage = () => {
  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
      employees: formList([{ name: "", active: false }]),
    },
  });

  const fields = form.values.employees.map((_, index) => (
    <Group key={index} mt="xs">
      <TextInput
        placeholder="John Doe"
        required
        sx={{ flex: 1 }}
        {...form.getListInputProps("employees", index, "name")}
      />
      <Switch
        label="Active"
        {...form.getListInputProps("employees", index, "active")}
      />
      <ActionIcon
        color="red"
        variant="hover"
        onClick={() => form.removeListItem("employees", index)}
      >
        <Trash size={16} />
      </ActionIcon>
    </Group>
  ));

  return (
    <Box sx={{ maxWidth: 500 }} mx="auto">
      {fields.length > 0 ? (
        <Group mb="xs">
          <Text weight={500} size="sm" sx={{ flex: 1 }}>
            Name
          </Text>
          <Text weight={500} size="sm" pr={90}>
            Status
          </Text>
        </Group>
      ) : (
        <Text color="dimmed" align="center">
          No one here...
        </Text>
      )}

      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          required
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />

        <Checkbox
          mt="md"
          label="I agree to sell my privacy"
          {...form.getInputProps("termsOfService", { type: "checkbox" })}
        />
        {fields}

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>

      <Group position="center" mt="md">
        <Button
          onClick={() =>
            form.addListItem("employees", { name: "", active: false })
          }
        >
          Add employee
        </Button>
      </Group>

      <Text size="sm" weight={500} mt="md">
        Form values:
      </Text>
      <Code block>{JSON.stringify(form.values, null, 2)}</Code>
    </Box>
  );
};

export default Sample;
