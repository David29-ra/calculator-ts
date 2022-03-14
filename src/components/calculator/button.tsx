import styled from "@emotion/styled";

interface Props {
  button: { value: string, type: string, url?: string },
  onClick: () => void
}
export function Button({button, onClick}:Props) {
  const Number = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #e5e7eb;
    ${button.type === "number" ? "font-size: 40px; line-height: 56px;" : ""}
    
    
    background-color: ${ button.type === "operator" ? "#f3f4f6" : "#ffffff" };
  `
  return (
    <Number onClick={onClick} id={button.value} value={button.value}>
      {button.url ? <Img id={button.value} src={button.url} alt={button.value} /> : button.value}
    </Number>
  )
  
}

const Img = styled.img`
  width: 40px;
  height: 30px;
`