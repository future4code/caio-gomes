import React from 'react'
import styled from 'styled-components'


export function FormEtapa3(props) {
    return (
        <div>
            <h1> Etapa 3 - INFORMAÇÕES GERAIS DE ENSINO </h1>
            <div>
                <p>5. Por que você não terminou um curso de graduação?</p>
                <input type="text"/>
            </div>
            <div>
                <p>6. Você fez algum curso complementar?</p>
                <select name="curso" id="curso">
                    <option value="">Curso Técnico</option>

                    <option value="">Curso de Inglês</option>

                    <option value="">Não fiz curso complementar</option>
                </select>
            </div>
        </div>
    )
}

export default FormEtapa3;