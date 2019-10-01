import React from 'react';
import './ImageButton.css';
import PropTypes from 'prop-types';


export function ImageButton(props) {
    return (
        <div>
            <button>{props.botao}</button>
            <img src={props.imagem}/>
        </div>
    )
}

ImageButton.propTypes = {
    botao: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
}