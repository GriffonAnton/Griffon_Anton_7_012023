
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import React from 'react';
import PropTypes from 'prop-types';

function Rating ({stars}){

    const ratingStars = () => {
        console.log("stars");
        console.log(stars)
        let starsList = [];
        for (let i = 1; i <= 5; i++) {
            if (stars >= i) {
                starsList.push(<FontAwesomeIcon className='rating__star rating__star--color' icon={solid('star')}/>);
            } else {
                starsList.push(<FontAwesomeIcon className='rating__star rating__star--grey' icon={solid('star')}/>);
            }
        }
        return starsList;
    }

    return (
        <div className='rating'>
            {ratingStars()}
        </div>
    );

}

Rating.propTypes = {
    stars: PropTypes.number.isRequired
}

export default Rating;