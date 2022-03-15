import styled from "@emotion/styled";
import { MouseEventHandler } from "react";

interface Props {
  button: { value: string, type: string, url?: string },
  handleClick: MouseEventHandler
}

export function Button({button, handleClick}:Props){
  const Number = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${ button.type === "operator" ? "#336699" : "#a2bbd4" };
    border-radius: 10px;
    ${button.type !== "img" ? "font-size: 40px; line-height: 56px;" : ""}
    
    
    background-color: ${ button.type === "operator" ? "#aec0d3" : "#e5ecf3" };
  `
  return (
    <Number onClick={handleClick} id={button.value} value={button.value}>
      {button.url ? <Img id={button.value} src={button.url} alt={button.value} /> : button.value}
    </Number>
  )
  
}

const Img = styled.img`
  width: 40px;
  height: 30px;
`