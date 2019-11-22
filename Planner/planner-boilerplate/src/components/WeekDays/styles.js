import styled from 'styled-components';
import 'typeface-roboto'

export const ContainerPlannerDays = styled.div`
    min-heigth: 100vh;
    display: flex;
    flex-wrap: wrap;
    font-family: 'Roboto';
`
export const WrapperDayWeek = styled.div`
    height: 250px;
    width: 300px;
    margin: 10px;
    border: 5px solid #8806CE;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
`
export const DayName = styled.h1`
    color: white;
    font-weigth: bold;
    border-bottom: 3px solid white;
    width: 100%;
    font-size: 20px;
    text-align: center;
    margin: 3px;
`
export const TaskName = styled.li`
    color: white;
    margin: 3px;
`
