import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import CountryFlagList from '../presentational/CountryFlagList';
import { getCountries, searchCountries, deleteCountry } from '../actions/countries-actionsCreators';

class CountryFlagContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      perPage: 3,
      offset: 0,
      pageCount: 2
    }
  }


  componentDidMount() {
    this.props.dispatch(getCountries(this.state.perPage));
    this.props.dispatch(searchCountries(''));
  }
  search(event) {
    this.props.dispatch(searchCountries(event.target.value));
  }

  deleteCountry(id) {
    this.props.dispatch(deleteCountry(id));
  }

  handlePageClick = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.state.perPage);

    // this.setState({offset: offset}, () => {
    //   this.loadCommentsFromServer();
    // });
  };

  render() {
    return (
      <div>
        <div className="search text-center">
          <input type="text" onChange={this.search.bind(this)} placeholder="Search..." />
        </div>
        <div>
          <CountryFlagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry.bind(this)} />
          <ReactPaginate previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={<a href="">...</a>}
            breakClassName={"break-me"}
            pageCount={this.state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={1}
            onPageChange={this.handlePageClick}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = function (store) {
  return {
    countries: store.countriesReducer.countries,
    visibleCountries: store.countriesReducer.visibleCountries
  };
};

export default connect(mapStateToProps)(CountryFlagContainer);
