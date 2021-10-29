import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Input = ({ inputValue, changeValue, halfRound, inputStyle }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus()
  });
  
  const handleChange = (event) => {
    changeValue(event.target.value);
  };

  return (
  <div className="imput">
    <input
      ref={inputRef}
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
  inputStyle: PropTypes.string.isRequired,
};

export default Input;
