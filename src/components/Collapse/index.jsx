
import React, { Component,useState } from 'react';
import PropTypes from 'prop-types';

function Collapse({title, text}) {

    const [open, setOPen] = useState(false);

    const toggle = () => {
        setOPen(!open);
    };

    return (
        <article className='collapse'>
            <h2 className='collapse__title' onClick={toggle}>{title}</h2>
            {open && <p className='collapse__text'>{text}</p>}
        </article>
  );

};

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}


export default Collapse;