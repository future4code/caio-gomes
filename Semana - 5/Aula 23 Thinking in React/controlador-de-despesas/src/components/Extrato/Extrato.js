import React from 'react'
import styled from 'styled-components'



const ExtratoContainer = styled.div`
    border: 3px  black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    width: 50vw;
    background-color: #FFCD00;
    font-family: Helvetica, sans-serif;
`

const DespesaNovaContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const Botoes = styled.button`
    width: 40%;
    height: 40px;
    border: none;
    font-size: 1.5rem;
    background-color: #D5000E;
    color: white;
    cursor: pointer;
`

export function Extrato(props) {
    return (
        <ExtratoContainer>
            <h1>Extrato de Despesas</h1>
            <p>Filtrar despesas:</p>
            <select>
                <option value="alimentacao">Alimentação</option>
                <option value="lazer">Lazer</option>
                <option value="contas">Contas</option>
                <option value="contas">Transporte</option>
            </select>
            <input type="number" placeholder="Filtrar por Valor Mínimo" />
            <input type="number" placeholder="Filtrar por Valor Máximo" />
            <DespesaNovaContainer>
                {props.novaDespesa}
            </DespesaNovaContainer>
            <Botoes onClick={props.aoClicarEmVoltar}>Voltar</Botoes>

        </ExtratoContainer>
    )
}