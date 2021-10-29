import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import './style.scss';

const Button = ( { text, setNextRound, reset, styles, optionIsSelected, countries } ) => {
  const history = useHistory();
  const handleDisplay = () => {
    if (text === "Drapeau suivant" && !optionIsSelected) {
      return "nodisplay";
    } else if (text === "Commencer" && !countries) {
      return "nodisplay";
    }
  }

  const handleClick = () => {
    if(text === "Drapeau suivant") {
      setNextRound();
    } else if (text === "Abandonner") {
      reset();
      history.push('/');
    } else if (text === "Commencer") {
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
