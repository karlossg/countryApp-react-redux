import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/CountryFlagList';
import { getCountries, searchCountries } from '../actions/countries-actionsCreators';

class CountryFlagContainer extends Component {
  componentDidMount() {
    this.props.dispatch(searchCountries(''));
    this.props.dispatch(getCountries());
  }
  search(event) {
    this.props.dispatch(searchCountries(event.target.value));
  }
  render() {
    return (
      <div>
        <div className="search text-center">
          <input type="text" onChange={this.search.bind(this)} />
        </div>
        <CountryFlagList countries={this.props.visibleCountries} />
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    countries: store.countriesReducer.countries,
    visibleCountries: store.countriesReducer.visibleCountries
  };
};

export default connect(mapStateToProps)(CountryFlagContainer);
