import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import CountryFlagList from '../presentational/CountryFlagList';
import { getCountries, searchCountries, deleteCountry } from '../actions/countries-actionsCreators';

class CountryFlagContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      perPage: 5,
      offset: 0,
      pageCount: 0
    };
  }

  componentDidMount() {
    this.props.dispatch(getCountries(this.state.offset, this.state.perPage));
    this.props.dispatch(searchCountries(''));
    this.setState({ offset: this.state.perPage });
  }

  componentWillMount() {
    const pageCount = 20 / this.state.perPage;
    this.setState({ pageCount });
  }

  search(event) {
    this.props.dispatch(searchCountries(event.target.value));
  }

  deleteCountry(id) {
    this.props.dispatch(deleteCountry(id));
  }

  handleSelect(event) {
    const pageCount = Math.ceil(20 / event.target.value);
    this.setState({
      perPage: event.target.value,
      pageCount,
      offset: 0
    });
    this.props.dispatch(getCountries(0, event.target.value));
  }

  handlePageClick = data => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.state.perPage);
    this.setState({ offset: offset });
    this.props.dispatch(getCountries(offset, offset + this.state.perPage));
  };

  render() {
    return (
      <div>
        <div className="search text-center">
          <select onChange={this.handleSelect.bind(this)}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
          <input type="text" onChange={this.search.bind(this)} placeholder="Search..." />
        </div>
        <div>
          <CountryFlagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry.bind(this)} />
          <div className="myPagination">
            {this.state.pageCount > 1 && (
              <ReactPaginate
                className="myPagination"
                previousLabel={'previous'}
                nextLabel={'next'}
                pageCount={this.state.pageCount}
                onPageChange={this.handlePageClick}
                containerClassName={'pagination'}
                // subContainerClassName={'pages pagination'}
                // activeClassName={'active'}
              />
            )}
          </div>
        </div>
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
