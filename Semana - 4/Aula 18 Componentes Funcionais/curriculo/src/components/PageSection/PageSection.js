import React from 'react';
import './PageSection.css';

export function PageSection (props) {
    return(
      <div className="content">
        {props.children}
      </div>
    )
  }
  
 