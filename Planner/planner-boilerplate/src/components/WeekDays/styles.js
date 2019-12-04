import styled from 'styled-components';
import 'typeface-roboto'

export const ContainerPlannerDays = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-family: 'Roboto';
    justify-content: center;
`
export const WrapperDayWeek = styled.div`
    height: 400px;
    width: 300px;
    margin: 20px;
    border: 5px solid #8806CE;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
`
export const DayName = styled.h1`
    color: white;
    font-weight: bold;
    border-bottom: 3px solid white;
    font-size: 1.5rem;
    text-align: center;
    margin: 5px;
`
export const TaskName = styled.li`
    color: white;
    margin: 5px;
`
