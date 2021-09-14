import React from 'react';
import PropTypes from 'prop-types';

const Field = ({ inputValue, changeValue, ...props }) => {
    const handleChange = (event) => {
      changeValue(event.target.value);
    };
    return (
      <input
        value={inputValue}
        onChange={handleChange}
        className="field"
        {...props} 
      />
    );
  };
  
  Field.propTypes = {
    inputValue: PropTypes.string,
    changeValue: PropTypes.func,
    type: PropTypes.string,
  };
  
  Field.defaultProps = {
    inputValue: '',
    type: 'text',
  };
  
export default Field;