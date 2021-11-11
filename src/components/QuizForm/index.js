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
  const commonAnswer = currentCountry.translations.fra.common.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/-/g, ' ');
  const officialAnswer = currentCountry.translations.fra.official.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/-/g, ' ');
  const relevantCommonAnswer = commonAnswer.replace(/\s*\(.*?\)\s*/g, '');
  const relevantOfficialAnswer = officialAnswer.replace(/\s*\(.*?\)\s*/g, '');
  const handleSubmit = (e) => {
    e.preventDefault();
    const userAnswer = inputValue.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/-/g, ' ');
    if(userAnswer === relevantCommonAnswer || userAnswer === relevantOfficialAnswer) {
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
  startMCQ: PropTypes.func.isRequired,
  halfRound: PropTypes.bool.isRequired,
  doubleIncrement: PropTypes.func.isRequired,
  setInputStyle: PropTypes.func.isRequired,
}
export default QuizForm;
