
import React from 'react';
import { Link } from 'react-router-dom';
import LogoKasa from "../../assets/logo_kasa.png"

function Header() {
    return (
      <header>
        <img src={LogoKasa} alt="logo de Kasa" />
        <nav>
          <p><Link to="/">Accueil</Link></p>
          <p><Link to="/a-propos">À Propos</Link></p>
        </nav>
      </header>
    );
}

export default Header;