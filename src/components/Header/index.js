import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo1.png';

import './style.scss';

const Header = () => (
  <div className="header">
    <div className="header-logo" >
      <img className="header-logo-image" src={logo} alt="logo"/>
    </div>
    <div className="header-slogan">
      <p>Jouez avec les drapeaux du monde entier</p>
    </div>
    <div className="header-rules">Règles</div>
  </div>
);

Header.propTypes = {

};

export default Header;
