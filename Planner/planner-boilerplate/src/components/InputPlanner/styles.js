import styled from 'styled-components'
import 'typeface-roboto'

export const WrapperTask = styled.div`
    height: 80px;
    background-color: #5A2776;
    display: flex;
    align-items: center;
	justify-content: center;
    border-bottom: 4px solid white;
    
`
export const StyledForm = styled.form`
    width: 70%
    display: flex;
    align-items: center;
    justify-content: space-between
`
export const StyledInput = styled.input`
    background-color: white;
    width: 400px;
    height: 40px;
    font-size: 20px;
    padding: 5px;

    &:focus{
        outline: none;
    }
`
export const StyledSelect = styled.select`
    width: 200px;
    height: 40px;
    border: 1px solid white;
    background-color: #2F2F2F;
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 16px;
    color: white;

    &:focus{
        outline: none;
    }
`
export const StyledButton = styled.button`
    height: 40px;
    width: 150px;
    border: 1px solid white;
    border: none;
    cursor: pointer;
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 16px;
    color: white;
    background-color: #2F2F2F;
`