import React from 'react';
import './BigCard.css';
import Cartman from '../img/cartman.jpg'
import PropTypes from 'prop-types';

export function BigCard(props) {
    return (
        <div className='big-card'>
            <h3>{props.titulo}</h3>
            <img src={props.imagem} />
            <div className="description">
                <p>{props.descricao}</p>
            </div>
        </div>
    )
}

BigCard.propTypes = {
    titulo: PropTypes.string.isRequired,
    imagem: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired
}