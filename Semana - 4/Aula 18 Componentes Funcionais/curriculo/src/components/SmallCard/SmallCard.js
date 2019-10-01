import React from 'react';
import './SmallCard.css';
import PropTypes from 'prop-types';


export function SmallCard(props) {
    return (
        <div className="small-card">
            <img src={props.imagem}/>
            <p className="name-bold">{props.titulo}</p>
            <p>{props.email}</p>
        </div>
    )
}

SmallCard.propTypes = {
    imagem: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}