import React from "react";
import { Button } from "@mantine/core";

type Props = {
  title: string;
  className?: string;
};
export const HeadButton: React.VFC<Props> = ({ title, className }) => {
  return (
    <div>
      <Button color="violet" radius="xl" className={className}>
        {title}
      </Button>
    </div>
  );
};
