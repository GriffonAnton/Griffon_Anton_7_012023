
import React  from 'react';
import { useParams } from 'react-router-dom';
import Carrousel from '../../components/Carrousel';
import Collapse from '../../components/Collapse';
import Logements from '../../data/logements.json';
import Error from '../Error';
import Rating from '../../components/Rating';
import Tags from '../../components/Tags';

function FicheLogement() {

    const { logementId } = useParams();
    const logementsList = Logements;
    const infoLogement = logementsList.find(logement => logement.id === logementId);
    if (infoLogement === undefined) {
        return (<Error />);
    }
    
    console.log('+infoLogement.rating');
    console.log(+infoLogement.rating);
    return (
        <section className='fiche_logement'>
            <Carrousel picturesList={infoLogement.pictures} />
            <div className='fiche_logement__header'>
                <div className='fiche_logement__header__left'>
                    <h1>{infoLogement.title}</h1>
                    <p>{infoLogement.location}</p>
                    <Tags tags={infoLogement.tags}/>
                </div>
                <div className='fiche_logement__header__right'>
                    <div className='host'>
                        <p>{infoLogement.host.name}</p>
                        <img  src={infoLogement.host.picture} alt={'photo de ' + infoLogement.host.name}/>
                    </div>
                    <Rating stars={+infoLogement.rating}/>
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