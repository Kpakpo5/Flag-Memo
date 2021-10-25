import React from 'react';
import PropTypes from 'prop-types';

const Option = ({ 
  optionIsSelected,
  value,
  setOptionIsSelected,
  correctAnswer,
  increment,
  id,
  selectedId,
  setSelectedId 
}) => {
  
  const handleClick = (e) => {
    console.log(e.target.innerText);
    const chosenId = Number(e.target.getAttribute("id"));
    console.log(id);
    console.log(chosenId);
    setOptionIsSelected();
    setSelectedId(chosenId);
    if (e.target.innerText === correctAnswer) {
      increment();
    }
  };
  
  return (
    <button
      type="button"
      id={id}
      onClick={handleClick}
      className={`option ${
        optionIsSelected && (value===correctAnswer)
          ? "true"
          : selectedId === id
            ? "wrong"
            : ""
      }`}
      disabled={optionIsSelected}
    >
    {value}
    </button>
  );
};

Option.propTypes = {
  optionSelected: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default Option;
