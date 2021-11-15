import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.png';
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
        <p>Testez vos connaissances sur les drapeaux et pays avec ce Quiz.</p>
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
                <strong>&#201;tape 1 :</strong> Donnez le nom du pays dont le drapeau est affiché.
                <br/>
                * Le nom doit être bien orthographié. Néanmoins, oublier une majuscule ou l'accent d'une voyelle ne vous pénalise pas.
                <br/><br/>
                {' '}
                <strong>&#201;tape 2 :</strong> Selectionnez la capitale du pays parmi les 4 choix proposés.
                <br/>
                <br/>
                7 drapeaux vous sont proposés pendant le Quiz. Chaque pays trouvé vous rapporte 2 points et chaque capitale 1 point.
                <br/>
                Vous avez accès à votre score sur 20 à la fin du Quiz. Ne faites aucune erreur et obtenez le score royal de 21/20 &#x1F451;.
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
