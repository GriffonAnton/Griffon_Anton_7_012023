
import React, { Component }  from 'react';
import { useParams } from 'react-router-dom';
import Carrousel from '../../components/Carrousel';
import Logements from '../../data/logements.json';

function FicheLogement() {

    const idLogement = useParams().logementId;
    const logementsList = Logements;
    const infoLogement = logementsList.find(logement => logement.id === idLogement);
    console.log('infoLogement')
    console.log(infoLogement);
    const picturesList = infoLogement.pictures;
    console.log('picturesList')
    console.log(picturesList);
    
    return (
        <section className='fiche_logement'>
            <Carrousel picturesList={picturesList}/>
        </section>
    );
};

export default FicheLogement;