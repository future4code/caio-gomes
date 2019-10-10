import React from 'react'
import styled from 'styled-components'


const CadastroContainer = styled.div`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    padding: 5px;

`


export class Cadastro extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            valorDaDespesa: "",
            tipoDaDespesa: "",
            descricaoDaDespesa: ""

        }
    }

    aoDeclararValorDaDespesa = (event) => {
        this.setState({ valorDaDespesa: event.target.value }, () => {
            console.log(this.state.valorDaDespesa)
        })
    }


    aoMudarTipoDespesa = (event) => {
        this.setState({ tipoDaDespesa: event.target.value }, () => {
            console.log(this.state.tipoDaDespesa)
        })


    }

    aoDescreverDespesa = (event) => {
        this.setState({ descricaoDaDespesa: event.target.value }, () => {
            console.log(this.state.descricaoDaDespesa)
        })
    }


    aoClicarEmSalvar = () => {
        const novaDespesa = {
            valorDaDespesa: this.state.valorDaDespesa,
            tipoDaDespesa: this.state.tipoDaDespesa,
            descricaoDaDespesa: this.state.descricaoDaDespesa
        };
        console.log(novaDespesa)
        this.props.criarDespesa(novaDespesa);
    }

    render() {
        return (
            <CadastroContainer>
                <h1>Cadastre suas despesas</h1>
                <input
                    type="number"
                    placeholder="Valor da despesa em R$"
                    value={this.state.valorDaDespesa}
                    onChange={this.aoDeclararValorDaDespesa}
                />

                <p>Escolha um tipo de despesa:</p>

                <select onChange={this.aoMudarTipoDespesa}>
                    <option value=""></option>
                    <option value="alimentacao">Alimentação</option>
                    <option value="lazer">Lazer</option>
                    <option value="contas">Contas</option>
                    <option value="transporte">Transporte</option>
                </select>
                <textarea
                    cols="20" rows="10"
                    placeholder="Descreva sua despesa"
                    value={this.state.descricaoDaDespesa}
                    onChange={this.aoDescreverDespesa}
                />
                <button onClick={this.aoClicarEmSalvar}>Salvar</button>
                <button onClick={this.props.aoClicarEmConsultar}>Consultar Extrato</button>
            </CadastroContainer >

        )
    }
}