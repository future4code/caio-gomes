import styled from 'styled-components'
import 'typeface-ubuntu';


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: linear-gradient(180deg, #010e13, #217ea3 35%, #91c7dd 71%, #f0f3f5);
`
export const StyledTitle = styled.h1`
  font-family: 'Ubuntu';
  font-size: 3rem;
  color: white;
`

export const FormContainer = styled.form`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 500px;
  justify-content: center;
  padding: 20px;
  border-radius: 5px;
  border: 2px solid black;
`
export const StyledLabel = styled.label`
  font-family: 'Ubuntu';
  font-size: 20px;
  margin-top: 5px;
`

export const StyledSelect = styled.select`
  margin: 10px;
  height: 30px;
  border: none;
  font-size: 16px;
  cursor: pointer;
`
export const StyledOption = styled.option`
  font-family: 'Ubuntu';
  font-size: 20px;
  cursor: pointer;
`

export const ButtonSend = styled.button`
  margin: 20px 0;
  width: 300px;
  height: 60px;
  border: none;
  border-radius: 5px;
  align-self: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  background-color: #F67F20;
  cursor: pointer;
  transition: all ease-in-out 0.4s;

  &:hover {  
    transform: scale(0.9);
  }
`
export const BtnHome = styled.button`
  border: none;
  width: 200px;
  height: 60px;
  font-family: 'Ubuntu';
  font-weight: bold;
  background-color: #092C3A;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 5px;
  transition: all ease-in-out 0.3s;

  &:hover {  
    transform: scale(1.1);
  }
 `