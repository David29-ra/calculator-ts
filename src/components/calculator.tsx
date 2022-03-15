import { ChangeEvent, MouseEvent, useState } from "react";
import { Data } from "../global/constants";
import { Button } from "./calculator/button";
import { Calendar } from "./calculator/calendar";
import { Equal } from "./calculator/equal";
import { GridContainer } from "./calculator/gridcontainer";
import { Screen } from "./calculator/screen";
import { Title } from "./calculator/title";

export function Calculator(): JSX.Element {
  const [data, setData] = useState("0");
  const [calendar, setCalendar] = useState(false);
  const [equal, setEqual] = useState(true);
  const [dot, setDot] = useState(false);
  console.log(calendar, data);

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    const toCompare: string = e.currentTarget.dataset.type!;
    const value: string = e.currentTarget.value;

    console.log(toCompare, typeof toCompare);

    type tConditions = {
      [key: string]: () => void;
    }

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
        setData(String(eval(data)));
        setEqual(false)
        return
      },
      "operator": () => {
        // if (["x", "÷", "+", "-"].includes(data.at(-1))) return

        setData(data + value);
        setDot(false)
        return
      },
      "number": () => {
        data === "0" ? setData(value) : setData(data + value);
        return
      }
    }
    if (equal) {
      conditions[toCompare]()
    } else {
      console.log("equal is false");
    }
    
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  }

  return(
    <GridContainer>
      <Title />
      <Screen handleChange={handleInputChange} value={data} />
      {Data.buttons.map(button => <Button key={button.id} button={button} handleClick={handleButtonClick}/>)}
      <Equal handleClick={handleButtonClick} />
      <Calendar state={ calendar }/>
    </GridContainer>
  )
}