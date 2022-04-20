import React from "react";
import { Button } from "@mantine/core";

type Props = {
  title: string;
  className?: string;
  onClick?: () => void;
};

export const HeadButton: React.VFC<Props> = ({ title, className, onClick }) => {
  return (
    <div>
      <Button
        color="violet"
        radius="xl"
        className={className}
        onClick={onClick}
      >
        {title}
      </Button>
    </div>
  );
};
