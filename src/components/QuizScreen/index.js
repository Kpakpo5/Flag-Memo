import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import QuizForm from '../../containers/Quizform';
import './style.scss';

import { getRandomItem } from '../../utils';

const QuizScreen = ({countries, saveCountry}) => {
  const currentCountry = getRandomItem(countries);
  const currentFlag = currentCountry.flag;
  saveCountry(currentCountry);
  
    return (
      <div className="quizscreen">
        <span>Drapeau 1/1</span>
      <div className="flag">
        <img className="flag-pic" src={currentFlag} alt="drapeau aléatoire" />
      </div>
      <QuizForm />
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
