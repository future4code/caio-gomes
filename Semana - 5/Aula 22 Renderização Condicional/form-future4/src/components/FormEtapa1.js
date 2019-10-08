import React from 'react'
import styled from 'styled-components'



export function FormEtapa1(props) {
    return (
        <div>
            <h1>Etapa 1 - DADOS GERAIS</h1>
            <div>
                <p>1. Qual seu nome?</p>
                <input type="text"/>
                <p>2. Qual sua idade?</p>
                <input type="text"/>
                <p>3. Qual seu email?</p>
                <input type="text"/>
            </div>
            <div>
                <select name="escolaridade" id="escolaridade">
                    <option value={props.medioIncompleto}>Ensino Médio Incompleto</option>

                    <option value={props.medioCompleto}>Ensino Médio Completo</option>

                    <option value={props.superiorIncompleto}>Ensino Superior Incompleto</option>

                    <option value={props.superiorCompleto}>Ensino Superior Completo</option>
                </select>
                <button onClick={props.onClickButtonContinue}>Continuar</button>
            </div>
        </div>
    )
}
export default FormEtapa1;
