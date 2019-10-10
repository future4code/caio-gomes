import React from 'react'
import styled from 'styled-components'


const CadastroContainer = styled.div`
    border: 3px  black;
    box-shadow: 5px 10px #888888;
    display: flex;
    flex-direction: column;
    padding: 5px;
    width: 30vw;
    background-color: #FFCD00;
    font-family: Helvetica, sans-serif;
`
const TituloCadastro = styled.h1`
    align-self: center;
    font-size: 2rem;
    
`
const InputValor = styled.input`
    width: 30%;
    height: 30px;
`
const SeletorTipo = styled.select`
    width: 30%;
`
const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 5px;
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

const DescricaoArea = styled.textarea`
    width: 90%;
    height: 100px;
    border: none;
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
                <TituloCadastro>Cadastre suas despesas</TituloCadastro>
                <InputValor
                    type="number"
                    placeholder="Valor da despesa em R$"
                    value={this.state.valorDaDespesa}
                    onChange={this.aoDeclararValorDaDespesa}
                />

                <p>Escolha um tipo de despesa:</p>

                <SeletorTipo onChange={this.aoMudarTipoDespesa}>
                    <option value=""></option>
                    <option value="alimentacao">Alimentação</option>
                    <option value="lazer">Lazer</option>
                    <option value="contas">Contas</option>
                    <option value="transporte">Transporte</option>
                </SeletorTipo>
                <DescricaoArea
                    placeholder="Descreva sua despesa"
                    value={this.state.descricaoDaDespesa}
                    onChange={this.aoDescreverDespesa}
                />
                <ButtonContainer>
                <Botoes onClick={this.aoClicarEmSalvar}>Salvar</Botoes>
                <Botoes onClick={this.props.aoClicarEmConsultar}>Consultar Extrato</Botoes>
                </ButtonContainer>
            </CadastroContainer >

        )
    }
}