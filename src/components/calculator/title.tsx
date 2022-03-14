import styled from "@emotion/styled"
import calculator from "../../assets/images/calculator.svg"

export function Title() {
  return (
    <Header>
      <Circle>
        <Img src={calculator} alt="calculator" />
      </Circle>
      <div>
        <p>Calculator made by<br/><span>Monito</span></p>
      </div>   
    </Header>
  )
}

const Header = styled.div`
  grid-area: 1 / 1 / 2 / 6;
  display: flex;
  gap: 16px;
  color: #ffffff;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 24px;
  background-color: #aec0d3;
  p {
    font-size: 24px;
    line-height: 32px;
  }
  span {
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;
  }
`

const Circle = styled.div`
  border-radius: 50%;
  background-color: #ffffff;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Img = styled.img`
  width: 70%;
  height: 70%;
`