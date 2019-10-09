import React from 'react'

export function Despesas(props) {
    return (
        <div>
            <p>Valor da Despesa:{props.valorDaDespesa}</p>
            <p>Tipo da Despesa:{props.tipoDaDespesa}</p>
            <p>Descrição da Despesa:{props.descricaoDaDespesa}</p>
        </div>
    )
}