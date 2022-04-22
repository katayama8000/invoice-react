import React, { useEffect, useState } from "react";
import { Button, Group, Modal } from "@mantine/core";

type Props = {
  title: "Pending" | "Paid" | "Draft";
  onClick?: () => void;
  modalFlag: boolean;
};
type colorType = "red" | "green" | "gray" | undefined;
type circleColor = "bg-red-500" | "bg-green-500" | "bg-gray-500" | undefined;

export const StatusButton: React.VFC<Props> = ({
  title,
  onClick,
  modalFlag,
}) => {
  const [opened, setOpened] = useState(false);
  const [circleColor, setCircleColor] = useState<circleColor>();

  useEffect(() => {
    setOpened(modalFlag);
  }, []);
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
    <div>
      <Button variant="subtle" color={color} onClick={onClick}>
        <span className={style} />
        {title}
        {modalFlag}
      </Button>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="状態を変更してもよいですか？"
      >
        Modal without header, press escape or click on overlay to close
      </Modal>
    </div>
  );
};
