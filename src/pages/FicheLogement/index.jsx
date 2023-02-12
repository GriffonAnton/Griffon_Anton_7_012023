

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import React, { Component }  from 'react';
import { useParams } from 'react-router-dom';
import Carrousel from '../../components/Carrousel';
import Collapse from '../../components/Collapse';
import Logements from '../../data/logements.json';
import Error from '../Error';

function FicheLogement() {

    const idLogement = useParams().logementId;
    const logementsList = Logements;
    const infoLogement = logementsList.find(logement => logement.id === idLogement);
    if (infoLogement == undefined) {
        return (<Error />);
    }
    const ratingStars = () => {
        let stars = [];
        for (let i = 1; i <= 5; i++){
            if (+infoLogement.rating >= i) {
                stars.push(<FontAwesomeIcon className='rating__star rating__star--color' icon={solid('star')}/>);
            } else {
                stars.push(<FontAwesomeIcon className='rating__star rating__star--grey' icon={solid('star')}/>);
            }
        }
        return stars;
    }
    console.log(ratingStars)
    
    return (
        <section className='fiche_logement'>
            <Carrousel picturesList={infoLogement.pictures} />
            <div className='fiche_logement__header'>
                <div className='fiche_logement__header__left'>
                    <h1>{infoLogement.title}</h1>
                    <p>{infoLogement.location}</p>
                    <div className='tags'>
                        {infoLogement.tags.map(tag => <div className='tags__tag'>{tag}</div>)}
                    </div>
                </div>
                <div className='fiche_logement__header__right'>
                    <div className='host'>
                        <p>{infoLogement.host.name}</p>
                        <img  src={infoLogement.host.picture} alt={'photo de profil de l\'hôte'}/>
                    </div>
                    <div className='rating'>
                        {ratingStars()}
                    </div>
                </div>
            </div>
            <div className='fiche_logement__collapses'>
                <div>
                    <Collapse title='Description' text={infoLogement.description} />
                </div>
                <div>
                    <Collapse title='Equipements' text={infoLogement.equipments.map(equipement => equipement + ('\n'))}/>
                </div>
            </div>
        </section>
    );
};

export default FicheLogement;