import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../containers/Button';
import data from '../../data';
import { handleEmojiDisplay } from '../../utils';

import './style.scss';

const ResultScreen = ({ score }) => {
  const emojisList = data;
  console.log(emojisList);
  const emojis = handleEmojiDisplay(score, emojisList);
  
  return (
    <div className="score">
      <div className="score-items">
        <div className="score-items-mark">
          <div className="score-items-mark-top">{score}</div>
          <div className="score-items-mark-line"></div>
          <div className="score-items-mark-bottom">20</div>
        </div>
        <div className="score-items-emoji">
          <img src={emojis[0]} alt="" />
        </div>
        <div className="score-items-emoji">
          <img src={emojis[1]} alt="" />
        </div>
      </div>
      <div className="score-buttons">
        <Button text="Rejouer" styles="replay" />
        <Button text="Accueil" styles="return-home" />
      </div>
    </div>
  );
  }
ResultScreen.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ResultScreen;
