import React from 'react'
import styled from 'styled-components'


const ContainerHeader = styled.div`
    border: 1px solid black;
    background-color: #1582AD;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SpotifTitle = styled.h1`
    font-size: 2.5rem;
    margin: 0;
`
const Span4 = styled.span`
    color: #F67F20;
    font-size: 4rem;
`

function Header (props) {
    return ( 
        <ContainerHeader>
            <SpotifTitle>Spotif<Span4>4</Span4> </SpotifTitle>
        </ContainerHeader>
    )
}

export default Header;