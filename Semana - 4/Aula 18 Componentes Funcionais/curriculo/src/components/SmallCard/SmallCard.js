import React from 'react';
import './SmallCard.css';
import PropTypes from 'prop-types';
import Email from './email.svg'
import Home from './house.svg'



export function SmallCard(props) {
    return (
        <div className="small-card">
            {props.imagem}
            {props.titulo}
            {props.email}
        </div>
    )
}

SmallCard.propTypes = {
    imagem: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}