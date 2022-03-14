import styled from "@emotion/styled";

export function Calendar() {
  return (
    <CalendarContainer>
      Calendar
    </CalendarContainer>
  )
}

const CalendarContainer = styled.div`
  grid-area: 7 / 1 / 8 / 6;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #4B5563;
  font-size: 24px;
  line-height: 32px;
  height: 52px;
  background-color: #F3F4F6;
  border: 1px solid #e5e7eb;
`