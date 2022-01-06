import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Round = ({ round, continent }) => (
  <div className="round">
    <span className="round-continent">{continent}</span>
    <span className="round-count">&#127937; {round}/7</span>
  </div>
);

Round.propTypes = {
  round: PropTypes.number.isRequired,
};

export default Round;
