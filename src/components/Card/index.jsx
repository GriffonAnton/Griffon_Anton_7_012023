
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Card({id,title,cover}) {
  
    const ficheURL = "/fiche-logement/" + id;

    return (
        <article className='card'>
            <Link to={ficheURL}>
                <img src={cover} alt='couverture du logement' />
                <h2>{title}</h2>
            </Link>
        </article>    
      
    )

};

Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired
}


export default Card;