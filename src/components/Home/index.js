import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import './style.scss';

const Home = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/quiz');
  }

  return (
  <div>
    <button onClick={handleClick}>Commencer</button>
  </div>
  )
};

Home.propTypes = {

};

export default Home;
