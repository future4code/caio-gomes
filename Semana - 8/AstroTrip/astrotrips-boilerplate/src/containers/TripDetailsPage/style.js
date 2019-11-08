import styled from 'styled-components'
import 'typeface-ubuntu'

export const DetailContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr 1fr;
  grid-template-rows: 1fr 3fr 1fr;
  align-items: center;
  background-image: linear-gradient(180deg, #0B132B, #1C2541 35%, #3A506B 71%, #3A506B);
  height: 100vh;
`
export const TitleTrip = styled.h2`
  
  font-family: 'Ubuntu';
  font-size: 2rem;
  color: #F67F20;
`
export const WrapperCandidates = styled.div`
  grid-column: 1;
  grid-row: 2 / -1;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TitleDetailTrip = styled.h1`
 grid-row: 1;
 grid-column: 1 / -1;
 color: #fff;
 font-family: 'Ubuntu';
 font-size: 2.5rem;
 border-bottom: 2px solid whitesmoke;
 text-align: center;
 margin-bottom: 10px;
`
export const DetailTripWrapper = styled.div`
  grid-row: 2;
  border: 5px solid white;
  align-self: flex-start;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  padding: 10px;
`
export const TextItem = styled.p`
 font-family: 'Ubuntu';
 font-size: 20px;
 color: #fff;
`
export const TextItemCandidate = styled.p`
 font-family: 'Ubuntu';
 font-size: 16px;
 color: black;
 padding: 5px;
`
export const Grid = styled.div`
  grid-column: 2;
  grid-row: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;
`
export const ContainerCandidate = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 60px);
  border: 3px solid black;
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-shadow: 3px 10px 20px 5px rgba(0, 0, 0, .5);
  cursor: pointer;
`
export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
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
export const BtnListTrip = styled.button`
  border: 2px solid white;
  width: 500px;
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
export const Span = styled.span`
 font-weight: bold;
 font-size: 25px;
`
export const SpanItem = styled.span`
  font-weight: bold;
  font-size: 20px;
  margin-right: 2px;
`

export const Button = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  font-weight: bold;
  font-family: 'Ubuntu';
  color: white;
  background-color: #1F262A;
  cursor: pointer;
  transition: ease-in-out all 0.2s;
  
  &:hover{
    transform: scale(1.1);
    border: 2px solid #257FA5;
  }
`
export const ContainerButton = styled.div`
  grid-row: 3;
  grid-column: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;
`