import React from "react";
import { Button } from "@mantine/core";

type Props = {
  title: "Pending" | "Paid" | "Draft";
};

type colorType = "red" | "green" | "gray" | undefined;

export const StatusButton: React.VFC<Props> = ({ title }) => {
  let color: colorType;
  switch (title) {
    case "Pending":
      color = "red";
      break;
    case "Paid":
      color = "green";
      break;
    case "Draft":
      color = "gray";
      break;
    default:
  }
  return (
    <Button variant="subtle" color={color}>
      <span className="inline-block h-2 w-2 rounded-full bg-orange-600" />
      {title}
    </Button>
  );
};
