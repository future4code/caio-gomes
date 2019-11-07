import styled from 'styled-components'
import 'typeface-ubuntu';

export const Wrapper = styled.div`
  height: 100vh;
  background-color: #2A3439;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const LoginContainer = styled.div`
  width: 800px;
  height: 450px;
  text-align: center;
  display: flex;
  color: white;
  box-shadow: 3px 10px 20px 5px rgba(0, 0, 0, .5);
  margin-bottom: 30px;
`
export const LoginForm = styled.form`
  width: 45%;
  background: rgba(20, 20, 20, .8);
  padding: 30px 0;
  border-right: 5px solid #fff;

  &:hover{
    border-right: 5px solid #0AB4B4;
  }
`
export const StyledTitle = styled.h1`
  font-family: 'Ubuntu';
`
export const StyledInput = styled.input`
  margin: 15px 0;
  font-size: 16px;
  padding: 10px;
  width: 250px;
  border: 1px solid white;
  border-top: none;
  border-left: none;
  border-right: none;
  background: rgba(20, 20, 20, .2);
  color: white;
  outline: none;
  font-family: 'Ubuntu';
`
export const StyledBtn = styled.button`
  border: 1px solid rgba(10, 180, 180, 1);
  background: rgba(20, 20, 20, .6);
  font-size: 18px;
  color: white;
  font-family: 'Ubuntu';
  margin-top: 20px;
  padding: 10px 50px;
  cursor: pointer;
  transition: .4s;
  &:hover {
    background: rgba(20, 20, 20, .8);
    padding: 10px 80px;
  }
  `
  export const BtnHome = styled.button`
  border: 1px solid white;
  width: 200px;
  height: 80px;
  font-family: 'Ubuntu';
  background-color: black;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  margin-top: 30px;
  transition: ease-in-out all 0.2s;
  
  &:hover{
    font-weight: bold;
    border: 1px solid #0AB4B4;
  }
  `
  export const ErrorMessage = styled.p`
  color: red;
`;