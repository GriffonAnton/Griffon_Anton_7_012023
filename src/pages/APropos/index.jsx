
import React, { Component } from 'react';
import Paysage from "../../assets/paysage_1.png";
import Collapse from '../../components/Collapse';
import Banner from '../../components/Banner';

function APropos() {
    return (
        <section className='a_propos'>
            <Banner urlImage={Paysage} />
            <div className='a_propos__content'>
                <Collapse title='Fiabilité' text='
                Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les information sont regulièrement vérifiées par nos équipes
                ' />
                <Collapse title='Respect' text='
                La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement dicriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme 
                ' />
                <Collapse title='Service' text='
                Nos équipes se iennent à votre disposition pour vous fournir une expérience parfaite. n hésitez pas à nous contacter si vous avez la moidre question
                '/>
                <Collapse title='Sécurité' text='
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l hôte qu au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                '/>
            </div>
        </section>
    )
};
 
export default APropos;