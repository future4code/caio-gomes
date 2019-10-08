import React from 'react';
import styled from 'styled-components';
import { InputNovaTarefa } from './InputNovaTarefa'





export function NovaTarefa (props){
let content;

if(props.tarefas) {
  content = (<InputNovaTarefa
    onChangeTask={props.onChangeTask}
    inputNovo={props.inputNovo}
    gerarTarefa={props.gerarTarefa}
  />)
}
   return( 
      <div>
          <h3>Crie suas tarefas!!!</h3>
          <button onClick={props.criandoTarefa}>Nova Tarefa</button>
          <hr/>
          {content}
      </div>
  )
}


    

