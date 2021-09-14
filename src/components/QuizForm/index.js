import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const QuizForm = ({ currentCountry, inputValue, changeValue }) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };

  const handleChange = (event) => {
    changeValue(event.target.value);
  };

  return (
  <div className="quiz">
    <form className="quiz-form" onSubmit={handleSubmit}>
      <p>&Agrave; quel pays appartient ce drapeau</p>
      <div>
        <input 
        className="quizz-form-input"
        name="country"
        type="text"
        value={inputValue}
        onChange={handleChange}
        />
      </div>
      <button 
        className="quiz-form-button" 
        type="submit"
      >
        Valider
      </button>
    </form> 
  </div>
  );
}
QuizForm.propTypes = {

}
export default QuizForm;
