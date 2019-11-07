import styled from 'styled-components'
import 'typeface-ubuntu'

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  height: 100vh;
`
export const TitleTrip = styled.h2`
  font-family: 'Ubuntu';
  font-size: 1.5rem;
  color: #fff;
`
export const WrapperCandidates = styled.div`
  display: flex;
`
export const TitleDetailTrip = styled.h1`
 color: #fff;
 font-family: 'Ubuntu';
 font-size: 2rem;
`
export const TextItem = styled.p`
 font-family: 'Ubuntu';
 font-size: 20px;
 color: #fff;
`
export const TextItemCandidate = styled.p`
 font-family: 'Ubuntu';
 font-size: 20px;
 color: black;
`
export const ContainerCandidate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  border: 3px solid black;
  box-shadow: 3px 10px 20px 5px rgba(0, 0, 0, .5);
  margin: 10px;
  padding: 10px;
  background-color: #fff;
  cursor: pointer;
`
export const BtnContainer= styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px;
  padding: 10px;
  height: 60px;
  width: 80%;
  font-family: 'Ubuntu';
  font-size: 30px;
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
export const DetailTripWrapper = styled.div`
  border: 5px solid white;
  width: 60%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`