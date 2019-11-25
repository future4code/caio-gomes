import styled from 'styled-components'
import Fundo from './fundo.jpg'
import 'typeface-ubuntu';

export const ListContainer = styled.div`
  height: 100vh;
  background-image: linear-gradient(180deg, #0B132B, #1C2541 35%, #3A506B 71%, #3A506B);
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const TitleListTrip = styled.h1`
  font-family: 'Ubuntu';
  color: white;
  margin: 40px;
  font-size: 4rem;
`
export const WrapperAllTRips = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-between;
  margin: 20px;
  width: 30%;
  border: 3px solid white;
  padding: 20px;
  transition: all ease-in-out 0.6s;
  
  &:hover {
    width: 40%;
    border: 3px solid #06CDF4;
    background-color: #1F262A;
  }
`
export const TripsContainer = styled.div`
  border: 2px solid white;
  width: 60%;
  display: flex;
  align-self: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  cursor: pointer;
  transition: all ease-in-out 0.3s;

  &:hover {  
    transform: scale(1.1);
    border: 2px solid #257FA5;
    background-color: black;
  }
`
export const TripName = styled.h2`
  font-family: 'Ubuntu';
  font-size: 20px;
  color: white;
  margin: 10px;
  padding: 10px;
  font-size: 1.5rem;
`
export const BtnHome = styled.button`
  border: 2px solid white;
  width: 200px;
  height: 80px;
  font-family: 'Ubuntu';
  background-color: #1F262A;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  transition: ease-in-out all 0.2s;
  
  &:hover{
    font-weight: bold;
    border: 2px solid #257FA5;
  }
`
export const BtnCreateTrip = styled.button`
  border: 2px solid white;
  width: 400px;
  height: 80px;
  font-family: 'Ubuntu';
  background-color: #1F262A;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  transition: ease-in-out all 0.2s;
  
  &:hover{
    font-weight: bold;
    border: 2px solid #257FA5;
  }
`
export const ContainerButton = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  height: 100px;
  margin-bottom: 30px;
`
