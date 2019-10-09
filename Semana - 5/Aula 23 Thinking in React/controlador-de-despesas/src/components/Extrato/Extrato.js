import React from 'react'
import styled from 'styled-components'


const ExtratoContainer = styled.div`
    border: 1px solid red;
    display: flex;
    flex-direction:column;
    margin: 10px;
    padding: 5px;
`
const TodasDespesasContainer = styled.div`
    border: 1px solid blue;
    margin: 5px;
`

 export class Extrato extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listaDespesas: props.listaDespesas
        }
    }


    adicionarDespesa = (novaDespesa) => {
        const copiaListaDespesa = [novaDespesa, ...this.state.listaDespesas]
        this.setState({ listaDespesas: copiaListaDespesa })
    }


    render() {
        // const despesasFeitas = this.state.listaDespesas.map(despesa => {
        //     return <TodasDespesasContainer despesa={despesa} />
        // });
            
    
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
                    {/* {despesasFeitas} */}
                <button>Voltar</button>
            </ExtratoContainer >
        )
    }
}