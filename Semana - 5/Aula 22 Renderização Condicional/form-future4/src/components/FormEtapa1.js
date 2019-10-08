import React from 'react'
import styled from 'styled-components'


const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
`




export function FormEtapa1(props) {
  
    return (
        
        <FormContainer>
            <h1>Etapa 1 - DADOS GERAIS</h1>
            <div>
                <p>1. Qual seu nome?</p>
                <input type="text"/>
                <p>2. Qual sua idade?</p>
                <input type="text"/>
                <p>3. Qual seu email??</p>
                <input type="text"/>
            </div>
            <div>
                <select onChange={props.onChangeValueOption}>
                    <option value="#">Selecione sua escolaridade:</option>

                    <option value="medioIncompleto">Ensino Médio Incompleto</option>

                    <option value="medioCompleto">Ensino Médio Completo</option>

                    <option value="superiorIncompleto">Ensino Superior Incompleto</option>

                    <option value="superiorCompleto">Ensino Superior Completo</option>
                </select>
                
            </div>
        </FormContainer>
    )
}
export default FormEtapa1;
