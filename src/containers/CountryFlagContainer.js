import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import CountryFlagList from '../presentational/CountryFlagList';
import { getCountries, searchCountries, deleteCountry } from '../actions/countries-actionsCreators';
import { setPerPage, setOffset, setPageCount } from '../actions/pagination-actionCreators';

class CountryFlagContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstPage: 0
    };
  }

  componentDidMount() {
    this.props.dispatch(getCountries(this.props.offset, this.props.perPage));
    this.props.dispatch(searchCountries(''));
    this.setState({ offset: this.props.perPage });
  }

  componentWillMount() {
    const pageCount = 20 / this.props.perPage;
    this.props.dispatch(setPageCount(pageCount));
  }

  search(event) {
    this.props.dispatch(searchCountries(event.target.value));
  }

  deleteCountry(id) {
    this.props.dispatch(deleteCountry(id));
  }

  handleSelect(event) {
    this.setState(this.state);
    const value = Number.parseInt(event.target.value, 10);
    const pageCount = Math.ceil(20 / value);
    this.props.dispatch(setPerPage(value));
    this.props.dispatch(setOffset(0));
    this.props.dispatch(setPageCount(pageCount));
    this.setState({
      firstPage: 0
    });
    this.props.dispatch(getCountries(0, value));
  }

  handlePageClick = data => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.props.perPage);
    this.props.dispatch(setOffset(offset));
    this.setState({ firstPage: selected });
    this.props.dispatch(getCountries(offset, offset + this.props.perPage));
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
            {this.props.pageCount > 1 && (
              <ReactPaginate
                className="myPagination"
                previousLabel={'previous'}
                nextLabel={'next'}
                pageCount={this.props.pageCount}
                onPageChange={this.handlePageClick}
                containerClassName={'pagination'}
                forcePage={this.state.firstPage}
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

const mapStateToProps = function(store) {
  return {
    countries: store.countriesReducer.countries,
    visibleCountries: store.countriesReducer.visibleCountries,
    perPage: store.paginationReducer.perPage,
    offset: store.paginationReducer.offset,
    pageCount: store.paginationReducer.pageCount
  };
};

export default connect(mapStateToProps)(CountryFlagContainer);
