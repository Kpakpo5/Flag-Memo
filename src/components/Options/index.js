import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import { get3RandomItems } from '../../utils';

const Options = ({ countries, currentCountry, optionSelected }) => {
  const newArray = countries.filter(country => 
    country.name.common !== currentCountry.name.common);
  const partialOptions = get3RandomItems(newArray);
  console.log(partialOptions);
  const totalOptions = [...partialOptions, currentCountry].sort(() =>
    Math.random() - 0.5);
  
  return (
    <div className="options">
      {totalOptions.map((option) => 
        <button 
          key={option.name.common}
          disabled={optionSelected}
        >
          {option.capital[0]}
        </button>)}
    </div>
  );
};

Options.propTypes = {

};

export default Options;
