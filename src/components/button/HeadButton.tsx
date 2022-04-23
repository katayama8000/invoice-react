import React from "react";
import { Button } from "@mantine/core";
import { useRecoilState } from "recoil";
import { buttonColorState, userState } from "@component/atoms";

type Props = {
  title: string;
  className?: string;
  onClick?: () => void;
};

export const HeadButton: React.VFC<Props> = ({ title, className, onClick }) => {
  const [buttonColor] = useRecoilState(buttonColorState);
  return (
    <div>
      <Button
        color={buttonColor}
        radius="xl"
        className={className}
        onClick={onClick}
      >
        {title}
      </Button>
    </div>
  );
};
