
import React from 'react';
import PropTypes from 'prop-types';

function Tags({tags}) {
    return (
        <div className='tags'>
            {tags.map((tag, index) => <div className='tags__tag' key={index}>{tag}</div>)}
        </div>
    );
}

Tags.propTypes = {
    tags: PropTypes.array.isRequired
}

export default Tags;