
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

function Carrousel({ picturesList }) {

    console.log('picturesList');
    console.log(picturesList);
    
    const [indexPicture, setIndexPicture] = useState(1);
    console.log(indexPicture);

    const next = () => {
        console.log('next');
        if (indexPicture === picturesList.length) {
            setIndexPicture(1);
        } else {
            setIndexPicture(indexPicture+1);
        }
    };

    const previous = () => {
        console.log('previous');
        if (indexPicture === 1) {
            setIndexPicture(picturesList.length);
        } else {
            setIndexPicture(indexPicture-1);
        }
    };
    /*
    var picturesElements = [];

    function isThisIndex(index) {
        return index + 1 === indexPicture;
    }

    for (let index in picturesList) {
        picturesElements.push( isThisIndex(index) && (< img src = { picturesList[index]} alt = 'images du logement' />))
    }
    */
    console.log('lien actuel');
    console.log(picturesList[indexPicture-1]);

    return (
        <div className='carrousel'>
            <div className='carrousel__arrow' onClick={previous}>
                <FontAwesomeIcon icon={solid('chevron-left')}/>
            </div>
            <img className='carrousel__images' src={picturesList[indexPicture - 1]} alt={'image du logement ' + indexPicture} />
            <div className='carrousel__counter'>{indexPicture}/{picturesList.length}</div>
            <div className='carrousel__arrow' onClick={next}>
                <FontAwesomeIcon icon={solid('chevron-right')}/>
            </div>     
        </div>
    );

}

Carrousel.propTypes = {
    picturesList: PropTypes.array.isRequired
}

export default Carrousel;