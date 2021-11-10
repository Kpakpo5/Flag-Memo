import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Round = ({ round }) => (
    <span className="round">&#127937; {round}/7</span>
);

Round.propTypes = {
  round: PropTypes.number.isRequired,
};

export default Round;
