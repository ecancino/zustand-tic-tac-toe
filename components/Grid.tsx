import React from "react";
import styled from "styled-components";

import Rows from "./Rows";

export function Grid({ className }) {
  return (
    <table className={className}>
      <tbody>
        <Rows />
      </tbody>
    </table>
  );
}

export default styled(Grid)`
  width: 500px;
  height: 500px;
  padding: 0;

  & td {
    position: relative;
    min-width: 100px;
    min-height: 100px;
    text-align: center;
    padding: 0;
    margin: 0;
  }
`;
