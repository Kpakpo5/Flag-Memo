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
}) => {
  const history = useHistory();
  
  const handleDisplay = () => {
    if ((text === "Drapeau suivant" && !optionIsSelected) || (text === "Drapeau suivant" && gameOver)) {
      return "nodisplay";
    } else if (text === "Commencer" && !countries) {
      return "nodisplay";
    } else if (text === "Votre score" && !gameOver) {
      return "nodisplay";
    } else return "";
  }

  const handleClick = () => {
    if(text === "Drapeau suivant") {
      incrementRound();
      setNextRound();
    } else if (text === "Abandonner") {
      reset();
      history.push('/');
    } else if (text === "Commencer") {
      incrementRound();
      history.push('/quiz');
    } else if (text === "Votre score") {
      history.push('/resultat');
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
