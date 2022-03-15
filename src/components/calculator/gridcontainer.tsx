import { ReactNode } from "react"
import styled from "@emotion/styled"

interface Props {
  children: ReactNode
}

export function GridContainer({children}:Props) {
  return (
    <Grid>{children}</Grid>
  )
}
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 100px);
  grid-template-rows: repeat(6, 100px);
  gap: 10px;
`
