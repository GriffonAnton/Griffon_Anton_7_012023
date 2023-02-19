
import React from 'react';
import LogoNegatif from "../../assets/logo_negatif.png"

function Footer() {
    return (
      <footer>
        <div>
          <img src={LogoNegatif} alt="logo de Kasa"/>
        </div>
        <p>
          &copy; 2020 Kasa. All right reserved
        </p>
      </footer>  
    );
}

export default Footer;