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
  grid-template-columns: repeat(5, 80px);
  grid-template-rows: repeat(6, 80px);
  gap: 10px;
  width: 100%;
  height: 100%;
`
