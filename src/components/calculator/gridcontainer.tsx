import { FC, ReactNode } from "react"
import styled from "@emotion/styled"

interface Props {
  children: ReactNode
}

export const GridContainer: FC<Props> = ({ children }) => {
  return (
    <Grid>{children}</Grid>
  )
}
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 100px);
  grid-template-rows: repeat(6, 100px);
`
