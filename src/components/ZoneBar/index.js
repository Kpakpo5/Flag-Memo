import React from 'react';
import PropTypes from 'prop-types';
import Zone from '../../containers/Zone';

import './style.scss';

const Zonebar = () => (
  <div className="zonebar">
    <ul className="zonebar-list">
      <Zone zone="Monde" />
      <Zone zone="Afrique" />
      <Zone zone="Amérique" />
      <Zone zone="Asie" />
      <Zone zone="Europe" />
      <Zone zone="Océanie" />
    </ul>
  </div>
);

Zonebar.propTypes = {

};

export default Zonebar;
