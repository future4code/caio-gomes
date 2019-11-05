import styled from 'styled-components'
import Fundo from './fundo.jpg'
import 'typeface-ubuntu';

export const ListContainer = styled.div`
  height: 100vh;
 background-color: #1E1373;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  z-index: 1;
`
export const TitleListTrip = styled.h1`
  font-family: 'Ubuntu';
  color: white;
  margin: 20px;
  font-size: 4rem;
  z-index: 1;
`
export const TripsContainer = styled.div`
  border: 3px solid white;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  z-index: 1;
  cursor: pointer;
  
`
export const TripName = styled.h2`
  font-family: 'Ubuntu';
  color: white;
  margin: 10px;
  padding: 10px;
  z-index: 1;
`
export const DescriptionTrip = styled.p`
  color: white;
  font-family: 'Ubuntu';
  font-size: 1.3rem;
  margin: 10px;
  padding: 10px;
`
export const BtnHome = styled.button`
  border: none;
  width: 300px;
  height: 100px;
  font-family: 'Ubuntu';
  background-color: black;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  margin-top: 20px;
 
  
`