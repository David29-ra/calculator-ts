import styled from "@emotion/styled";

// interface DisplayProps {
//   value: string;
//   onChange: () => void;
// }

export function Screen() {
  return <Display />;
}

const Display = styled.input`
  grid-area: 2 / 1 / 2 / 6;
  text-align: center;
  font-size: 40px;
  line-height: 56px;
  color: #ffffff;
  background-color: #336699;
`