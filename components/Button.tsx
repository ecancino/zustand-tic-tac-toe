import styled from "styled-components";
import { transparentize } from "polished";

const Button = styled.button.attrs(() => ({ background: "#ffffff" }))`
  background: ${props => transparentize(0.25, props.background)};
  color: #000000;
  transition: all 0.3s ease-in-out;
  display: inline-block !important;
  max-width: 50vw;
  border: none;
  border-radius: 0;
  text-align: center;
  padding: 0;

  &:hover {
    background: ${props => transparentize(0.7, props.background)};
    box-shadow: none;
    cursor: pointer;
  }

  &:disabled {
    cursor: default;
    background-color: ${props => transparentize(0.1, props.background)};
  }
`;

export default Button;
