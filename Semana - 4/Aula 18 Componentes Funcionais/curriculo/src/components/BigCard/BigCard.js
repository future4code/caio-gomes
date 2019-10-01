import React from 'react';
import './BigCard.css';
import PropTypes from 'prop-types';

export function BigCard(props) {
    return (
        <div className='big-card'>
            {props.titulo}
            {props.imagem}
            {props.descricao}
        </div>
    )
}

BigCard.propTypes = {
    titulo: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired
}