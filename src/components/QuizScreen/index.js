import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import QuizForm from '../../containers/Quizform';
import MCQ from '../../containers/MCQ';
import Button from '../../containers/Button';
import Round from '../../containers/Round';
import Popup from 'reactjs-popup';
import { useHistory } from 'react-router-dom';
import './style.scss';

import { getRandomItem } from '../../utils';

const QuizScreen = ({
  countries,
  saveCountry,
  reset
}) => {

  const handleUnpop = (e) => {
    history.push('/');
  };

  const handleBeforeUnload = (event) => {
    const e = event || window.event;
    e.preventDefault();
    if (e) {
      e.returnValue = ''; 
    }
    return '';
  };

  useEffect(() => {
    window.onpopstate = handleUnpop;
  });

  useEffect(() => {
    window.onbeforeunload = handleBeforeUnload;
  });

  const relevantCountries = countries.filter(country =>
    country.capital !== undefined);
  const currentCountry = getRandomItem(relevantCountries);
  const currentFlag = currentCountry.flags.svg;
  saveCountry(currentCountry);
  
  const history = useHistory();
  const handleClick = () => {
    reset();
    history.push('/');
  }
  
    return (
      <div className="quizscreen">
        <Round />
        <div className="quizscreen-flag">
          <img className="quizscreen-flag-image" src={currentFlag} alt="drapeau aléatoire" />
        </div>
        <QuizForm />
        <MCQ />
        <Button text="Drapeau suivant" styles="next" />
        <Button text="Votre score" styles="result" />
        <Popup
          trigger={<button className="quit"> Abandonner </button>}
          modal
          nested
          >
            {close => (
              <div className="quit-modal">
                <div className="quit-modal-header"> Confirmation </div>
                <div className="quit-modal-content">
                  Abandonner vous fait perdre votre progression et vous redirige vers la page d'accueil.
                  <br/>
                  Confirmer ?
                </div>
                <div className="quit-modal-buttons">
                  <button className="keepOn" onClick={handleClick}>Oui</button>
                  <button className="close" onClick={close}>Annuler</button>
                </div>
              </div>
            )}
        </Popup>
      </div>
  );
};

QuizScreen.propTypes = {
  countries: PropTypes.array.isRequired,
  saveCountry: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default QuizScreen;
