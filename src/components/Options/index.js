import React from 'react';
import PropTypes from 'prop-types';

import Option from '../../containers/Option'
import './style.scss';

import { get3RandomItems } from '../../utils';

const Options = ({ countries, currentCountry, }) => {
  const newArray = countries.filter(country => 
    country.name.common !== currentCountry.name.common);
  const partialOptions = get3RandomItems(newArray);
  console.log(partialOptions);
  const totalOptions = [...partialOptions, currentCountry].sort(() =>
    Math.random() - 0.5);
    const correctAnswer = currentCountry.capital[0];
  return (
    <div className="options">
      {totalOptions.map((option, index) => 
        <Option
          key={option.name.common}
          value={option.capital[0]}
          id={index}
          correctAnswer={correctAnswer}
        />)}
    </div>
  );
};













Options.propTypes = {

};

export default Options;
