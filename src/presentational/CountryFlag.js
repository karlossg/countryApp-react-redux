import React from 'react';

const CountryFlag = props => (
  <div className="country-logo-wrapper">
    <img className="country-logo" src={props.country.imageUrl} alt={`flaga ${props.country.name}`} />
  </div>
);

export default CountryFlag;
