import { Data } from "../global/constants";
import { Button } from "./calculator/button";
import { GridContainer } from "./calculator/gridcontainer";
import { Screen } from "./calculator/screen";
import { Title } from "./calculator/title";

export function Calculator() {
  return(
    <GridContainer>
      <Title />
      <Screen />
      {Data.buttons.map(button => <Button key={button.id} button={button} onClick={()=>console.log('here')}/>)}
    </GridContainer>
  )
}