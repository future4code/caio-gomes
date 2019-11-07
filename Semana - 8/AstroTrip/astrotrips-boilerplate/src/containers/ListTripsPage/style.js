import styled from 'styled-components'
import Fundo from './fundo.jpg'
import 'typeface-ubuntu';

export const ListContainer = styled.div`
  height: 100vh;
  background-color: black;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const TitleListTrip = styled.h1`
  font-family: 'Ubuntu';
  color: white;
  margin: 20px 20px 0;
  font-size: 2rem;
 
`
export const WrapperAllTRips = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  margin: 20px;
  width: 50%;
`

export const TripsContainer = styled.div`
  border: 2px solid white;
  width: 40%;
  display: flex;
  align-self: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
  cursor: pointer;
  transition: all ease-in-out 0.3s;

  &:hover {  
    transform: scale(1.1);
    border: 2px solid #80CC28;
    background-color: #2A3439;
  }
`
export const TripName = styled.h2`
  font-family: 'Ubuntu';
  font-size: 20px;
  color: white;
  margin: 10px;
  padding: 10px;
`
export const BtnHome = styled.button`
  position: fixed;
  bottom: 0;
  border: 1px solid white;
  width: 200px;
  height: 80px;
  font-family: 'Ubuntu';
  background-color: black;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  margin-bottom: 30px;
  transition: ease-in-out all 0.2s;
  
  &:hover{
    font-weight: bold;
    border: 1px solid #0AB4B4;
  }
`