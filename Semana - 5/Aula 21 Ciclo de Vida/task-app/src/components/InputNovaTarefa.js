import React from 'react';
import styled from 'styled-components';


export function InputNovaTarefa (props) { 

  
  return (
      <div>
        <input 
        type="text" 
        placeholder="digite sua tarefa"
        onChange={props.onChangeTask}
        value={props.inputNovo}
        />
        <button onClick={props.gerarTarefa}>Criar!</button>
      </div>
    )
  }




