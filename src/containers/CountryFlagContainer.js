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
    // this.props.dispatch(searchCountries(''));
    this.setState({ offset: this.state.perPage });
  }

  componentWillMount() {
    const pageCount = this.props.countries.length / this.state.perPage;
    this.setState({ pageCount });
  }

  search(event) {
    this.props.dispatch(searchCountries(event.target.value));
  }

  deleteCountry(id) {
    this.props.dispatch(deleteCountry(id));
  }

  handleSelect(event) {
    this.setState({ perPage: event.target.value });
    this.props.dispatch(getCountries(this.state.offset, this.state.perPage));
  }

  handlePageClick = data => {
    // console.log(data);
    let selected = data.selected;
    let offset = Math.ceil(selected * this.state.perPage);

    this.setState({ offset: offset });
    this.props.dispatch(getCountries(this.state.offset, this.state.offset + this.state.perPage));
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
          <div>
            <ReactPaginate
              previousLabel={'previous'}
              nextLabel={'next'}
              breakLabel={<a href="">...</a>}
              breakClassName={'break-me'}
              pageCount={this.state.pageCount}
              marginPagesDisplayed={20}
              pageRangeDisplayed={10}
              onPageChange={this.handlePageClick}
              containerClassName={'pagination'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
            />
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
