import React from 'react'
import styled from 'styled-components'



const ExtratoContainer = styled.div`
    border: 1px solid red;
    display: flex;
    flex-direction:column;
    margin: 10px;
    padding: 5px;
`

const DespesaNovaContainer = styled.div`
    border: 1px solid purple;
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
            <DespesaNovaContainer>{props.novaDespesa}</DespesaNovaContainer>
            <button onClick={props.aoClicarEmVoltar}>Voltar</button>

        </ExtratoContainer>
    )
}