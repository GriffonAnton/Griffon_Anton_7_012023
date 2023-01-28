import '../../style.css';
import React, { Component } from 'react';
import LogoKasa from "../../assets/logo_kasa.png"

function Banner() {
    return (
      <header>
        <div>
          <img src={LogoKasa} alt="logo de Kasa" />
        </div>
        <nav>
          <p>Accueil</p>
          <p>À Propos</p>
        </nav>
      </header>
    );
}

export default Banner;