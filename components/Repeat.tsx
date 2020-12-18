import React from "react";

export default function Repeat({ length, children }) {
  return <>{Array.from({ length }, (_, row) => children(row))}</>;
}
