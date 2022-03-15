import { ChangeEvent, MouseEvent, useState } from "react";
import { Data } from "../global/constants";
import { Button } from "./calculator/button";
import { Calendar } from "./calculator/calendar";
import { Equal } from "./calculator/equal";
import { GridContainer } from "./calculator/gridcontainer";
import { Screen } from "./calculator/screen";
import { Title } from "./calculator/title";

export function Calculator() {
  const [data, setData] = useState("0");
  const [calendar, setCalendar] = useState(false);
  console.log(calendar, data);

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.id);
    const id = e.currentTarget.id;
    if (id === "showcalendar") {
      setCalendar(!calendar);
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
      <Equal  />
      <Calendar state={ calendar }/>
    </GridContainer>
  )
}