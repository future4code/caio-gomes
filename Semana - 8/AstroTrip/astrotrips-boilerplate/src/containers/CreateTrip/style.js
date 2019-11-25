import styled from 'styled-components'
import { TextField } from '@material-ui/core'
import 'typeface-ubuntu'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  background-image: linear-gradient(180deg, #0B132B, #1C2541 35%, #3A506B 71%, #3A506B);
`
export const FormTripContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  width: 500px;
  height: 70%;
  padding: 20px;
  border: 3px solid black;
  background-color: #fff;
` 
export const Title = styled.h1`
  margin-top: 20px;;
  font-family: 'Ubuntu';
  font-size: 3rem;
  color: #fff;
`
export const StyledSelect = styled.select`
  margin: 10px;
  height: 40px;
  border: none;
  font-size: 16px;
  cursor: pointer;
`
export const StyledOption = styled.option`
  font-family: 'Ubuntu';
  font-size: 20px;
  cursor: pointer;
`

export const StyledTextField = styled(TextField)`
  margin: 10px;
  padding: 10px;
  font-family: 'Ubuntu';
  font-size: 16px;
`
export const ButtonSend = styled.button`
  margin: 20px 0;
  width: 200px;
  height: 60px;
  border: none;
  border-radius: 5px;
  align-self: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  background-color: #F67F20;
  cursor: pointer;
  transition: all ease-in-out 0.3s;

  &:hover {  
    transform: scale(1.1);
    font-size: 1.8rem;
  }
`
export const InputDuration = styled.input`
  width: 250px;
  align-self: center;
  height: 30px;
`
export const StyledLabel = styled.label`
  font-family: 'Ubuntu';
  align-self: center;
  margin-top: 5px;
  font-size: 20px;
  font-weight: bold;
`
export const BtnGoBack = styled.button`
  position: fixed;
  bottom: 0;
  margin-bottom: 30px;
  width: 400px;
  height: 70px;
  font-size: 1.5rem;
  border: 2px solid #fff;
  font-family: 'Ubuntu';
  background-color: #1F262A;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: ease-in-out all 0.2s;

  &:hover{
    font-weight: bold;
    border: 2px solid #257FA5;
  }
`