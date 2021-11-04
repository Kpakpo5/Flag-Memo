import React from 'react';
import PropTypes from 'prop-types';

import Options from '../../containers/Options';

import './style.scss';

const MCQ = ({ halfRound, inputStyle, currentCountry, inputValue, countries }) => {
  const currentCountryName = currentCountry.translations.fra.common;

  return (
  <div className={halfRound ? "mcq" : "mcq-nodisplay"}>
    
    { (inputStyle === 'correct') 
    ? <div>
        <p>Bravo! <span>{currentCountryName}</span> est bien la bonne réponse.</p>
        <p>Quelle est sa capitale ?</p>
      </div>
    : <div>
        <p>La réponse <span>{inputValue}</span> est incorrecte.</p>
        <p><span>{currentCountryName} est le bon pays.</span></p>
        <p>Connaissez-vous sa capitale ?</p>
      </div>
    }
   {currentCountry && <Options />}
  </div>
  );
  }
MCQ.propTypes = {

};

export default MCQ;
