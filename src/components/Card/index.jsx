import '../../style.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Card(props) {
  
    const ficheURL = "/fiche-logement/" + props.id;
    const title = props.title;
    const cover = props.cover;
    Card.propTypes = {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired
    }
    return (
        <Link to={ficheURL}>
            <article className='card'>
                <img src={cover} alt='couverture du logement' />
                <h2>{title}</h2>
            </article>    
        </Link>
    )
    

};

export default Card;