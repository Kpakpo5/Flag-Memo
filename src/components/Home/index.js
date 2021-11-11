import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Button from '../../containers/Button';
import flags from '../../assets/images/flags.gif';

import './style.scss';

const Home = ({ fetchAllCountries }) => {
  useEffect(() => {
    fetchAllCountries();
  });
  
  return (
  <div className="home">
    <div className="home-image-container">
      <img className="home-image" src={flags} alt="flags-gif" />
    </div>
    <Button text="Jouer au Quiz" styles="start" />
  </div>
  )
};

Home.propTypes = {
  fetchAllCountries: PropTypes.func.isRequired,
};

export default Home;
