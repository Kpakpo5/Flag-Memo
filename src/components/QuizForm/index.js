import React from 'react';
import PropTypes from 'prop-types';
import Field from '../../containers/Field';
import './style.scss';

const QuizForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
  <div className="quiz">
    <form className="quiz-form" onSubmit={handleSubmit}>
      <p>&Agrave; quel pays appartient ce drapeau</p>
      <div>
        <Field id="country" name="country"/>
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
