import React from 'react';
import styled from 'styled-components';

export function Tarefas(props) { 
  return(
      <div>
        <hr/>
        <h3>Tarefas Para Fazer</h3>
        {props.children}
      </div>
  )
}



