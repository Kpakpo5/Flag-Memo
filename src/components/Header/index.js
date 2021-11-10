import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/images/flag.png';
import Popup from 'reactjs-popup';
import { useHistory } from 'react-router-dom';

import './style.scss';

const Header = ({ reset }) => {
  const history = useHistory();
  const handleClick = () => {
    reset();
    history.push('/');
  }
  
  return (
    <div className="header">
      <div className="header-logo" onClick={handleClick}>
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
              &#201;tape 1 : Tapez le nom du pays dont le drapeau est affiché.
              <br/>
              L'orthographe compte mais les majuscules et les accents ne sont pas pénalisants.
              <br/><br/>
              {' '}
              &#201;tape 2 : Selectionnez la capitale du pays parmi les 4 choix proposés.
              <br/>
              <br/>
              7 drapeaux vous seront proposés pendant le Quiz. Chaque pays trouvé vous donne 2 points et chaque capitale 1 point.
              Vous aurez à la fin du Quiz votre score sur 20. Sans erreur vous obtiendrez le score suprême de 21/20 &#x1F451;.
              <br/>
              <br/>
              &Agrave; vous de jouer !!!
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
}
Header.propTypes = {
  reset: PropTypes.func.isRequired,
};

export default Header;
