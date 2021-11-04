import React from 'react';
import PropTypes from 'prop-types';
import QuizForm from '../../containers/Quizform';
import MCQ from '../../containers/MCQ';
import Button from '../../containers/Button';
import './style.scss';

import { getRandomItem } from '../../utils';

const QuizScreen = ({
  countries,
  saveCountry,
}) => {
  const relevantCountries = countries.filter(country =>
    country.capital !== undefined);
  console.log(relevantCountries);
  const currentCountry = getRandomItem(relevantCountries);
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
      <Button text="Drapeau suivant" styles="next" />
      <Button text="Votre score" styles="result" />
      <Button text="Abandonner" styles="quit" />
      </div>
  );
};

QuizScreen.propTypes = {
  countries: PropTypes.array.isRequired,
  saveCountry: PropTypes.func.isRequired,
};

export default QuizScreen;
