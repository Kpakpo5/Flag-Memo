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
  const correctCommonAnswer = currentCountry.translations.fra.common.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const correctOfficialAnswer = currentCountry.translations.fra.official.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  console.log(correctCommonAnswer);
  console.log(correctOfficialAnswer);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    const userAnswer = inputValue.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    console.log(userAnswer);
    if(userAnswer === correctCommonAnswer || userAnswer === correctOfficialAnswer) {
      doubleIncrement();
      setInputStyle('correct');
    } else {
      setInputStyle('incorrect');
    }
    startMCQ();
  };

  return (
  <div className="quiz-form-container">
    <form className="quiz-form" onSubmit={handleSubmit}>
      <p>&Agrave; quel pays appartient ce drapeau ?</p>
        <Input />
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
