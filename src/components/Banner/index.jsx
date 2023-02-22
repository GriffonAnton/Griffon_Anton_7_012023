
import React from 'react';
import PropTypes from 'prop-types';

function Banner({ urlImage, text }) {
    console.log(text);
    return (
        <div className='banner'>
            <h1 className='banner__text'>{text}</h1>
            <img className={`banner__image ${ text && 'banner__image--darker'}`} src={urlImage} alt='fond de bannière' />
        </div>
    );

}

Banner.propTypes = {
    urlImage: PropTypes.string.isRequired,
    text: PropTypes.string
}

export default Banner;