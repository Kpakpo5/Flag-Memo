import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../containers/Input'
import './style.scss';

const QuizForm = ({
  currentCountry,
  inputValue,
  startMCQ,
  halfRound,
  doubleIncrement,
  setInputStyle
}) => {
  const correctAnswer = currentCountry.translations.fra.common.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  console.log(correctAnswer);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    const userAnswer = inputValue.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    console.log(userAnswer);
    if(userAnswer === correctAnswer) {
      doubleIncrement();
      setInputStyle('correct');
    } else {
      setInputStyle('wrong');
    }
    startMCQ();
  };

  return (
  <div className="quiz">
    <form className="quiz-form" onSubmit={handleSubmit}>
      <p>&Agrave; quel pays appartient ce drapeau</p>
      <div>
        <Input />
      </div>
      <button 
        className={halfRound ? "quiz-form-button-nodisplay" : "quiz-form-button"}
        type="submit"
      >
        Valider
      </button>
    </form> 
  </div>
  );
}
QuizForm.propTypes = {
  currentCountry: PropTypes.object.isRequired,
  inputValue: PropTypes.string.isRequired,
}
export default QuizForm;
