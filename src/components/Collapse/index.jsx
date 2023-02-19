
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function Collapse({title, text}) {

    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    };

    return (
        <article className='collapse'>
            <div className='collapse__head' onClick={toggle}>
                <h2>{title}</h2>
                {open ? <FontAwesomeIcon icon={solid('chevron-up')} /> : <FontAwesomeIcon icon={solid('chevron-down')} />}
            </div>
            {open && <div className='collapse__text'>
                <p>{text}</p>
            </div>}
        </article>
  );

};

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}


export default Collapse;