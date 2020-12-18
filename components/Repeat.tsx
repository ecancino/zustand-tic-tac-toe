import React, { Fragment } from "react";

type RepeatParams = {
  length: number;
  children: (row: number) => JSX.Element;
};

export default function Repeat({ length, children }: RepeatParams) {
  return (
    <Fragment>{Array.from({ length }, (_, row) => children(row))}</Fragment>
  );
}
