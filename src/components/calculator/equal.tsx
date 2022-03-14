import styled from "@emotion/styled";
import equal from "../../assets/images/equal.svg";

export function Equal(){
  return (
    <EqualButton>
      <Img id="equal" src={equal} alt="equal" />
    </EqualButton>
  )
}

const EqualButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e5e7eb;
  grid-area: 5 / 5 / 7 / 6;
  background-color: #06b6d4;
`

const Img = styled.img`
  width: 38px;
  height: 34px;
`