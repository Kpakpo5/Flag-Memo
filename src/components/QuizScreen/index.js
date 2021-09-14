import React from 'react';
import PropTypes from 'prop-types';
import QuizForm from '../QuizForm';
import './style.scss';

import { getRandomItem } from '../../utils';

const QuizScreen = ({countries}) => {
  const currentCountry = getRandomItem(countries);
  const currentflag = currentCountry.flag;
    console.log(currentCountry);
  return (
    <div className="quizscreen">
      <span>Drapeau 1/1</span>
      <div className="flag">
        <img className="flag-pic" src={currentflag} alt="drapeau aléatoire" />
      </div>
      <QuizForm />
      <button>Drapeau suivant</button>
      <button>Abandonner</button>
    </div>
  );
};

QuizScreen.propTypes = {
  countries: PropTypes.array.isRequired,
};

export default QuizScreen;
