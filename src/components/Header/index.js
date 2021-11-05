import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo1.png';
import Popup from 'reactjs-popup';

import './style.scss';

const Header = () => (
  <div className="header">
    <div className="header-logo" >
      <img className="header-logo-image" src={logo} alt="logo"/>
    </div>
    <div className="header-slogan">
      <p>Jouez avec les drapeaux du monde entier</p>
    </div>
    <Popup
    trigger={<button className="button"> Règles </button>}
    modal
    nested
    >
      {close => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="modal-header"> Règles </div>
          <div className="content">
            {' '}
            Etape 1 : Tapez le nom du pays dont le drapeau est affiché.
            <br/>
            L'orthographe compte mais les majuscules et les accents ne sont pas pénalisants.
            <br/><br/>
            {' '}
            Etape 2 : Selectionnez la capitale du pays parmi les 4 choix proposés.
            <br/>
            <br/>
            7 drapeaux vous seront proposés pendant le Quiz. Chaque pays trouvé vous donne 2 points et chaque capitale 1 point.
            Vous aurez à la fin du Quiz un score sur 20. Sans erreur vous obtiendrez le score suprême de 21/20 &#128081;.
            <br/>
            <br/>
            &Agrave; vous de jouer !!!
          </div>
        </div>
      )}
    </Popup>
  </div>
);

Header.propTypes = {

};

export default Header;
