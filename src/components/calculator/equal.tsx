import styled from "@emotion/styled";
import { MouseEventHandler } from "react";
import equal from "../../assets/images/equal.svg";

interface Props {
  handleClick: MouseEventHandler
}

export function Equal({handleClick}:Props): JSX.Element{
  return (
    <EqualButton data-type="equal" onClick={handleClick}>
      <Img data-type="equal" src={equal} alt="equal" />
    </EqualButton>
  )
}

const EqualButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #336699;
  grid-area: 5 / 5 / 7 / 6;
  background-color: #aec0d3;
  border-radius: 10px;
`

const Img = styled.img`
  width: 38px;
  height: 34px;
`