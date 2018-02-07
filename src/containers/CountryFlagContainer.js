import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import CountryFlagList from '../presentational/CountryFlagList';
import { getCountries, searchCountries, deleteCountry } from '../actions/countries-actionsCreators';
import { setPerPage, setPageCount, setActivePage } from '../actions/pagination-actionCreators';

class CountryFlagContainer extends Component {
  componentDidMount() {
    const pageCount = this.props.countries.length / this.props.perPage;
    this.props.dispatch(getCountries());
    this.props.dispatch(searchCountries(''));
    this.props.dispatch(setPageCount(pageCount));
  }

  search = event => {
    this.props.dispatch(setActivePage(0));
    this.props.dispatch(searchCountries(event.target.value));
  };

  deleteCountry = id => {
    this.props.dispatch(deleteCountry(id));
  };

  handleSelect = event => {
    const value = Number.parseInt(event.target.value, 10);
    const pageCount = Math.ceil(this.props.countries.length / value);
    this.props.dispatch(setPerPage(value));
    this.props.dispatch(setActivePage(0));
    this.props.dispatch(setPageCount(pageCount));

  };

  handlePageClick = data => {
    this.props.dispatch(setActivePage(data.selected));
  };

  render() {
    const offset = this.props.activePage * this.props.perPage;
    const countriesPerPage = this.props.visibleCountries.slice(offset, offset + this.props.perPage);
    return (
      <div>
        <div className="search text-center">
          <select onChange={this.handleSelect}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
          <input type="text" onChange={this.search} placeholder="Search..." />
        </div>
        <div>
          <CountryFlagList countries={countriesPerPage} deleteCountry={this.deleteCountry} />
          <div className="myPagination">
            {this.props.pageCount > 1 && (
              <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                pageCount={this.props.pageCount}
                onPageChange={this.handlePageClick}
                containerClassName={'pagination'}
                forcePage={this.props.activePage}
                marginPagesDisplayed={2}
                pageRangeDisplayed={4}
                activeClassName={'active'}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    countries: store.countriesReducer.countries,
    visibleCountries: store.countriesReducer.visibleCountries,
    perPage: store.paginationReducer.perPage,
    pageCount: store.paginationReducer.pageCount,
    activePage: store.paginationReducer.activePage
  };
};

export default connect(mapStateToProps)(CountryFlagContainer);
