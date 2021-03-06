import React from 'react';
import PropTypes from 'prop-types';

import Options from '../../containers/Options';

import './style.scss';

const MCQ = ({ halfRound, inputStyle, currentCountry }) => {
  const currentCountryName = currentCountry.translations.fra.common;

  return (
  <div className={halfRound ? "mcq" : "mcq-nodisplay"}>
    
    { (inputStyle === 'correct') 
    ? <div>
        <p>Bravo! <span className="mcq-countryName">" {currentCountryName} "</span> est bien la bonne réponse.</p>
        <p>Quelle est sa capitale ?</p>
      </div>
    : <div>
        <p>Réponse incorrecte.</p>
        <p><span className="mcq-countryName">" {currentCountryName} "</span> est le bon pays.</p>
        <p>Connaissez-vous sa capitale ?</p>
      </div>
    }
   {currentCountry && <Options />}
  </div>
  );
  }
MCQ.propTypes = {
  halfRound: PropTypes.bool.isRequired,
  inputStyle: PropTypes.string.isRequired,
  currentCountry: PropTypes.object.isRequired,
};

export default MCQ;
