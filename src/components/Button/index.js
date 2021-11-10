import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import './style.scss';

const Button = ({
  text,
  setNextRound,
  reset,
  styles,
  optionIsSelected,
  countries, 
  incrementRound,
  gameOver,
  fetchAllCountries,
}) => {
  const history = useHistory();
  
  const handleDisplay = () => {
    if ((text === "Drapeau suivant" && !optionIsSelected) || (text === "Drapeau suivant" && gameOver)) {
      return "hide";
    } else if (text === "Jouer au Quiz" && !countries) {
      return "hide";
    } else if (text === "Votre score" && !gameOver) {
      return "hide";
    } else if (text === "Abandonner" && gameOver) {
      return "hide";
    } else return "";
  }

  const handleClick = () => {
    if(text === "Drapeau suivant") {
      incrementRound();
      setNextRound();
    } else if (text === "Abandonner" || text === "Accueil") {
      reset();
      history.push('/');
    } else if (text === "Jouer au Quiz") {
      incrementRound();
      history.push('/quiz');
    } else if (text === "Votre score") {
      history.push('/resultat');
    } else if (text === "Rejouer") {
      reset();
      fetchAllCountries();
      incrementRound();
      history.push('/quiz');
    } 
  }

  return (
  <button 
    className={`${styles} ${handleDisplay()}`}
    onClick={handleClick}
  >
    {text}
  </button>
  );
  }
Button.propTypes = {

};

export default Button;
