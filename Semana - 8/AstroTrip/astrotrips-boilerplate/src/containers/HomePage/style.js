import styled from 'styled-components'
import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

export const HomeContainer = styled.div`
  background-color: #1582AD;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

export const AstroTrip = styled.h1`
  color: #fff;
  margin: 0;
  font-size: 5rem;

`
export const StyledButton = styled.button`
  color: #fff;
  background-color: #F67F20;
  width: 400px;
  height: 150px;
  font-size: 2rem;
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
`
