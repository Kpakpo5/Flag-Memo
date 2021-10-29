import React from 'react';
import PropTypes from 'prop-types';

import Options from '../../containers/Options';

import './style.scss';

const MCQ = ({ halfRound, inputStyle, currentCountry, inputValue, countries }) => {
  const currentCountryName = currentCountry.translations.fra.common;

  return (
  <div className={halfRound ? "mcq" : "mcq-nodisplay"}>
    <p>{ (inputStyle === 'correct') ? `Bravo! ${currentCountryName} est bien la bonne réponse.<br>
      Quelle est sa capitale?` :
      `${inputValue} n'est pas la bonne réponse, la réponse correcte est ${currentCountryName}.
      Connaissez-vous sa capitale ?`}
    </p>
   {currentCountry && <Options />}
  </div>
);
};
MCQ.propTypes = {

};

export default MCQ;
