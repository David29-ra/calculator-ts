import { GridContainer } from "./calculator/gridcontainer";
import { Screen } from "./calculator/screen";
import { Title } from "./calculator/title";

export function Calculator() {
  return(
    <GridContainer>
      <Title />
      <Screen />
    </GridContainer>
  )
}