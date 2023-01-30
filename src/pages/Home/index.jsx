import '../../style.css';
import React, { Component, useState, useEffect} from 'react';
import Paysage from "../../assets/paysage_1.png";
import Card from '../../components/Card';
import Logements from '../../assets/logements.json'

function Home() {

  
  /*
  useEffect(() => {
    setDataLoading(true);
    fetch(`https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json`)
      .then((response) => response.json()
        .then(({ logementsList }) => {
          console.log(logementsList)
          for (let logement of logementsList) {
            cards.push(<Card id={logement.id} title={logement.title} cover={logement.cover}/>);
          }
          
        }
      ).catch((error) => console.log(error))
        .finally(setDataLoading(false))
      )
  }, [])
  */
  const cards = [];
  const logementsList = Logements;
  
  for (let logement of logementsList) {
    cards.push(<Card id={logement.id} title={logement.title} cover={logement.cover}/>);
  }

  return (
    <section className='home'>
      <div className='home__img'>
        <h1 className='home__img__text'>Chez vous, partout et ailleurs</h1>
      </div>
      <div className='home__list'>
        {cards}
      </div>
    </section>
  )

};

export default Home;
