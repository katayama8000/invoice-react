import React, { useEffect, useState } from "react";
import { Button } from "@mantine/core";

type Props = {
  title: "Pending" | "Paid" | "Draft";
};
type colorType = "red" | "green" | "gray" | undefined;
type circleColor = "bg-red-500" | "bg-green-500" | "bg-gray-500" | undefined;

export const StatusButton: React.VFC<Props> = ({ title }) => {
  const [circleColor, setCircleColor] = useState<circleColor>();
  let color: colorType;
  let style = `${circleColor} inline-block h-2 w-2 rounded-full mr-1`;

  useEffect(() => {
    if (color === "red") setCircleColor("bg-red-500");
    if (color === "green") setCircleColor("bg-green-500");
    if (color === "gray") setCircleColor("bg-gray-500");
  }, [color]);

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
      <span className={style} />
      {title}
    </Button>
  );
};
