import styled from "@emotion/styled"
import calculator from "../../assets/images/calculator.svg"

export function Title(): JSX.Element {
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
    font-size: 20px;
    line-height: 24px;
  }
  span {
    font-weight: 500;
    font-size: 25px;
    line-height: 38px;
  }
`

const Circle = styled.div`
  border-radius: 50%;
  background-color: #ffffff;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Img = styled.img`
  width: 75%;
  height: 75%;
`