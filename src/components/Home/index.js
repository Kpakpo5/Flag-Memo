import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../containers/Button';
import globe from '../../assets/images/flags1.gif';

import './style.scss';

const Home = () => {
  return (
  <div className="home">
    <div className="home-image-container">
      <img className="home-image" src={globe} alt="globe terrestre en rotation" />
    </div>
    <Button text="Commencer" styles="start" />
  </div>
  )
};

Home.propTypes = {

};

export default Home;
