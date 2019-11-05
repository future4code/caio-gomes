import styled from 'styled-components'
import React from 'react'
import 'typeface-ubuntu';


export const HomeContainer = styled.div`
  background-image: linear-gradient(180deg, #010e13, #217ea3 35%, #91c7dd 71%, #f0f3f5);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`
export const SubTitle = styled.h2`
  color: #fff;
  font-size: 2rem;
  font-family: 'Ubuntu';
    
  `
export const ContainerTitles = styled.div`
  margin: 20px;
  z-index: 2;
  `

export const AstroTrip = styled.h1`
  color: #fff;
  margin: 20px;
  font-size: 5rem;
  font-family: 'Ubuntu';
`
export const StyledButton = styled.button`
  color: #fff;
  background-color: #F67F20;
  border-radius: 5px;
  box-shadow: 10px 10px 10px #2A3439;
  width: 400px;
  height: 150px;
  font-size: 2rem;
  font-family: 'Ubuntu';
  font-weight: bold;
  border: none;
  margin: 5px;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    font-size: 2.2rem;
  }
`
export const ContainerBtn = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  z-index: 2;
`
export const AstronautaImg = styled.img`
  /* width: 50%; */
  height: 100vh;
  z-index: 1;
  position: absolute;
  opacity: 0.1;
  align-self: center;
  bottom: 0;
  position: fixed;
`

export const RocketImg = styled.img`
  width: 100px;
  z-index: 2;
  -webkit-animation:  1s infinite  alternate;
    animation: mover 1s infinite  alternate;
    -webkit-animation:  1s infinite  alternate;
    animation: mover 1s infinite  alternate;

    @-webkit-keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-10px); }
}
@keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-10px); }
}


`