import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Input = ({ inputValue, changeValue, halfRound, inputStyle }) => {
  
  const handleChange = (event) => {
    changeValue(event.target.value);
  };

  return (
  <div className="imput">
    <input
    className={inputStyle}
    name="country"
    type="text"
    value={inputValue}
    onChange={handleChange}
    disabled={halfRound}
    />
  </div>
  );
}
Input.propTypes = {
  inputValue: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
  halfRound: PropTypes.bool.isRequired,
};

export default Input;
