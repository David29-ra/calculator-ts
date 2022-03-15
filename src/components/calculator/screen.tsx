import styled from "@emotion/styled";
import { ChangeEventHandler } from "react";

interface DisplayProps {
  value: string;
  handleChange: ChangeEventHandler;
}

export function Screen({ value, handleChange }: DisplayProps): JSX.Element {
  return <Display type="text" value={value} onChange={handleChange} />;
}

const Display = styled.input`
  grid-area: 2 / 1 / 2 / 6;
  text-align: center;
  font-size: 40px;
  line-height: 56px;
  color: #ffffff;
  background-color: #336699;
`