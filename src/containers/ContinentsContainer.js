import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setContinent, deleteCountry } from '../actions/countries-actionsCreators';
import CountryFlagList from '../presentational/CountryFlagList';

class ContinentsContainer extends Component {
  chooseContinent = event => {
    this.props.dispatch(setContinent(event.target.value));
  };

  deleteCountry = id => {
    this.props.dispatch(deleteCountry(id));
  };

  componentDidMount() {
    this.props.dispatch(setContinent('Europa'));
  }

  render() {
    return (
      <div>
        <select onChange={e => this.chooseContinent(e)}>
          <option value="Europa">Europa</option>
          <option value="Afryka">Afryka</option>
        </select>
        <CountryFlagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry} />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    visibleCountries: store.countriesReducer.visibleCountries
  };
};

export default connect(mapStateToProps)(ContinentsContainer);
