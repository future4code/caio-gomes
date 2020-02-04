import styled from "styled-components";

export const FormContainer = styled.div`
  margin: 20px;
  width: 100%;
  font-family: "Roboto", sans-serif;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid green;
`;
export const TextInput = styled.input`
  background-color: #fff;
  margin: 10px;
  height: 90%;
  width: 90%;
  padding: 5px;

  &:focus {
    outline: none;
  }
`;

export const FormBox = styled.form`
  margin: 20px auto;
  width: 400px;
  height: 450px;
  border-radius: 8px/7px;
  background-color: whitesmoke;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.31);
  border: solid 1px #cbc9c9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  padding: 6px 0;
  margin: 10px 8px 20px 0px;
  text-decoration: none;
  width: 300px;
  height: 60px;
  border-radius: 5px;
  background-color: #121212;
  box-shadow: 0 3px rgba(30, 38, 60, 0.75)
  transition: all 0.2s linear 0s;
  font-family: 'Roboto', sans-serif;
  top: 0px;
  position: relative;

  &:hover {
    top: 3px;
    background-color: #2e458b;
    box-shadow: none;
    cursor: pointer;
  }
`;
