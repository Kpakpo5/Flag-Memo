import React from 'react';
import PropTypes from 'prop-types';
import QuizForm from '../../containers/Quizform';
import MCQ from '../../containers/MCQ';
import './style.scss';

import { getRandomItem } from '../../utils';

const QuizScreen = ({
  countries,
  saveCountry,
}) => {
  const currentCountry = getRandomItem(countries);
  const currentFlag = currentCountry.flags.svg;
  saveCountry(currentCountry);
  
    return (
      <div className="quizscreen">
        <span className="quizscreen-round">Drapeau 1/1</span>
        <div className="quizscreen-flag">
          <img className="quizscreen-flag-image" src={currentFlag} alt="drapeau aléatoire" />
        </div>
      <QuizForm />
      <MCQ />
      <button>Drapeau suivant</button>
      <button>Abandonner</button>
      </div>
  );
};

QuizScreen.propTypes = {
  countries: PropTypes.array.isRequired,
  saveCountry: PropTypes.func.isRequired,
};

export default QuizScreen;
