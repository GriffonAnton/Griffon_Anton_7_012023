
import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Banner({ urlImage, text }) {

    return (
        <div className='banner'>
            <h1 className='banner__text'>{text}</h1>
            <img className='banner__image' src={urlImage} alt='image de bannière' />
        </div>
    );

}

Banner.propTypes = {
    urlImage: PropTypes.string.isRequired,
    text: PropTypes.string
}

export default Banner;