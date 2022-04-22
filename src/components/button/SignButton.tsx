import React from "react";
import { Button } from "@mantine/core";
import { type } from "os";

type Props = {
  title: string;
  type: "submit" | "reset" | "button";
};

export const SignButton: React.VFC<Props> = ({ title, type }) => {
  return (
    <div>
      <Button
        variant="outline"
        color="violet"
        radius="lg"
        size="xl"
        type="submit"
      >
        {title}
      </Button>
    </div>
  );
};
