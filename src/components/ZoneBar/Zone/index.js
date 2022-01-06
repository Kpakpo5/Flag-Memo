import React from 'react';
import PropTypes from 'prop-types';

const Zone = ({
  zone,
  continent,
  fetchAllCountries,
  fetchAfricaCountries,
  fetchEuropeCountries,
  fetchAsiaCountries,
  fetchOceaniaCountries,
  fetchAmericasCountries,
  setContinent,
}) => {
  const handleClick=() => {
    if (zone === "Monde") {
      fetchAllCountries();
      setContinent('Monde');

    }
    else if (zone === "Afrique"){
      fetchAfricaCountries();
      setContinent('Afrique');
    }
    else if (zone === "Amérique"){
      fetchAmericasCountries();
      setContinent('Amérique');
    }
    else if (zone === "Asie"){
      fetchAsiaCountries();
      setContinent('Asie');
    }
    else if (zone === "Europe"){
      fetchEuropeCountries();
      setContinent('Europe');
    }
    else if (zone === "Océanie"){
      fetchOceaniaCountries();
      setContinent('Océanie');
    }
  }

  return (
    <li
      className={`zone ${
        (continent === zone) 
          ? "active"
          : ""
        }`
      } 
      onClick={handleClick}
    >
      {zone}
    </li>
);
}

Zone.propTypes = {
  continent: PropTypes.string.isRequired,
  setContinent: PropTypes.func.isRequired,
  fetchAfricaCountries: PropTypes.func.isRequired,
  fetchAllCountries: PropTypes.func.isRequired,
  fetchEuropeCountries: PropTypes.func.isRequired,
  fetchAsiaCountries: PropTypes.func.isRequired,
  fetchOceaniaCountries: PropTypes.func.isRequired,
  fetchAmericasCountries: PropTypes.func.isRequired,
};

export default Zone;
