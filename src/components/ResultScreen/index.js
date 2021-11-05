import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../containers/Button';

import './style.scss';

const ResultScreen = () => {
  return (
    <div className="score">
      <div className="score-items">
        <div>
          <img src ="" alt="" />
        </div>
        <div>
          <img src ="" alt="" />
        </div>
      </div>
      <div className="score-buttons">
        <Button text="Rejouer" styles="replay" />
        <Button text="Retour à l'accueil" styles="return-home" />
      </div>
    </div>
  );
  }
ResultScreen.propTypes = {

};

export default ResultScreen;
