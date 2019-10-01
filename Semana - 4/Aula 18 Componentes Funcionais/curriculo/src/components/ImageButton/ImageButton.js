import React from 'react';
import './ImageButton.css';
import PropTypes from 'prop-types';


export function ImageButton(props) {
    return (
        <div className="botao">
        {props.imagem}{props.botao}
        </div>
    )
}

ImageButton.propTypes = {
    botao: PropTypes.string.isRequired
}