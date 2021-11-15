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
  getSelectedId,
  round,
  setGameOver,
}) => {
  
  const handleClick = (e) => {
    const chosenId = Number(e.target.getAttribute("id"));
    setOptionIsSelected();
    getSelectedId(chosenId);
    if (round === 7) {
      setGameOver();
    } 
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
  optionIsSelected: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  round: PropTypes.number.isRequired,
  setOptionIsSelected: PropTypes.func.isRequired,
  correctAnswer: PropTypes.string.isRequired,
  increment: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  selectedId: PropTypes.number,
  getSelectedId: PropTypes.func.isRequired,
  setGameOver: PropTypes.func.isRequired,
};

export default Option;
