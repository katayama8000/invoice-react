import React from "react";
import { StatusButton } from "@component/button/StatusButton";

export const SimpleInvoice: React.VFC = () => {
  const uuid = 356734;
  const date = 2022;
  const name = "coffee";
  const price = 100;

  return (
    <div>
      <div className="mt-5 flex flex-row items-end justify-around rounded-3xl bg-gray-600 py-5 px-2">
        <div>{uuid}</div>
        <div>{date}</div>
        <div>{name}</div>
        <div>{price}</div>
        <div>
          <StatusButton title="Draft" />
        </div>
      </div>
    </div>
  );
};
