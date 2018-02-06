import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCountry } from '../actions/countries-actionsCreators';
import CountryDetails from '../presentational/CountryDetails';

class CountryDetailsContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getCountry(this.props.match.params.id));
  }

  render() {
    return <CountryDetails country={this.props.selectedCountry} />;
  }
}

const mapStateToProps = store => {
  return {
    selectedCountry: store.countriesReducer.selectedCountry
  };
};

export default connect(mapStateToProps)(CountryDetailsContainer);
