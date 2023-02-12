
import React, { Component, useState, useEffect} from 'react';
import Paysage from "../../assets/paysage_1.png";
import Card from '../../components/Card';
import Logements from '../../data/logements.json';
import Banner from '../../components/Banner';

function Home() {

  const logementsList = Logements;

  return (
    <section className='home'>
      <Banner urlImage={Paysage} text='Chez vous, partout et ailleurs'/>
      <div className='home__list'>
        {logementsList.map(logement =>
          <Card id={logement.id} title={logement.title} cover={logement.cover} />
        )}
      </div>
    </section>
  )

};

export default Home;
