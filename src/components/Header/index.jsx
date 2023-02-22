
import React from 'react';
import { Link , useLocation} from 'react-router-dom';
import LogoKasa from "../../assets/logo_kasa.png"

function Header() {
  const location = useLocation();
  console.log('location')
  console.log(location.pathname);
  console.log('/');
  console.log(location.pathname == '/');

    return (
      <header>
        <img src={LogoKasa} alt="logo de Kasa" />
        <nav>
          <p className={location.pathname == '/' ? 'header__link--underline' : ''}><Link to="/">Accueil</Link></p>
          <p className={location.pathname == '/a-propos' ? 'header__link--underline' : ''}><Link to="/a-propos">À Propos</Link></p>
        </nav>
      </header>
    );
}

export default Header;