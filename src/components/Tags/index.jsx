
import React from 'react';
import PropTypes from 'prop-types';

function Tags({tags}) {
    return (
        <div className='tags'>
            {tags.map(tag => <div className='tags__tag'>{tag}</div>)}
        </div>
    );
}

Tags.propTypes = {
    picturesList: PropTypes.array.isRequired
}

export default Tags;