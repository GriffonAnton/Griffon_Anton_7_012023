
import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
    return (
        <section className='error'>
            <p className='error__code'>404</p>
            <p className='error__text'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/' className='error__link_home'>Retourner sur la page d'accueil</Link>
        </section>
    )
};
 
export default Error;