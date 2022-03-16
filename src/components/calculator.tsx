import { ChangeEvent, MouseEvent, useState } from "react";
import { Data } from "../global/constants";
import { Button } from "./calculator/button";
import { Calendar } from "./calculator/calendar";
import { Equal } from "./calculator/equal";
import { GridContainer } from "./calculator/gridcontainer";
import { Screen } from "./calculator/screen";
import { Title } from "./calculator/title";
import { evaluate } from "./helpers/evaluate";

export function Calculator(): JSX.Element {
  const [data, setData] = useState("0");
  const [calendar, setCalendar] = useState(false);
  const [dot, setDot] = useState(false);

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    const toCompare: string = e.currentTarget.dataset.type!;
    const value: string = e.currentTarget.value;

    type tConditions = { [key: string]: () => void }

    const conditions: tConditions = {
      "clear": () => {
        setData("0");
        setDot(false);
        return
      },
      "dot": () => {
        if (!dot) {
          setData(data + value)
          setDot(true)
        }
        return
      },
      "eraser": () => {
        if (data.at(-1) === ".") setDot(false);
        setData(data.slice(0, -1) || "0");
        return
      },
      "showcalendar": () => { setCalendar(!calendar) },
      "equal": () => {
        setData(evaluate(data));
        return
      },
      "operator": () => {
        const size = data.length;
        if (["x", "÷", "+", "-"].includes(data.charAt(size - 1))) return

        setData(data + value);
        setDot(false)
        return
      },
      "number": () => {
        data === "0" || data === "Syntax Error" ? setData(value) : setData(data + value);
        return
      }
    }

    conditions[toCompare]()
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let valueInput = e.target.value;
    let correctInput = e.target.value.match(/^[0-9*/x+÷-]*$/)
    
    if (correctInput) {
      if (valueInput[0] === "0") setData(valueInput.slice(1))
      else setData(valueInput)
    }
  }

  return(
    <GridContainer>
      <Title />
      <Screen handleChange={handleInputChange} value={data || "0"} />
      {Data.buttons.map(button => <Button key={button.id} button={button} handleClick={handleButtonClick}/>)}
      <Equal handleClick={handleButtonClick} />
      <Calendar state={ calendar }/>
    </GridContainer>
  )
}