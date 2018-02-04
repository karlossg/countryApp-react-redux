import {
  GET_COUNTRIES,
  GET_COUNTRY,
  SEARCH_COUNTRIES,
  DELETE_COUNTRY,
  SET_CONTINENT
} from '../actions/countries-actions';
import countriesData from '../data/countries.json';

const initialState = {
  countries: countriesData,
  selectedCountry: {},
  visibleCountries: countriesData
};

const countriesReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      console.log("visible", state.visibleCountries)


      let data = countriesData.slice(action.offset, action.limit)
      console.log(data)
      return Object.assign({}, state, { countries: data, visibleCountries: data });
    case GET_COUNTRY:
      const selectedCountry = state.countries.find(country => country.id === parseInt(action.id, 10));
      return Object.assign({}, state, { selectedCountry });
    case SEARCH_COUNTRIES:
      const foundCountries = state.countries.filter(country =>
        country.name.toLowerCase().includes(action.searchText.toLowerCase())
      );
      return Object.assign({}, state, { visibleCountries: foundCountries });
    case DELETE_COUNTRY:
      const notDeletedCountries = state.countries.filter(country => country.id !== action.id);
      const notDeletedVisibleCountries = state.visibleCountries.filter(country => country.id !== action.id);
      return Object.assign({}, state, { countries: notDeletedCountries, visibleCountries: notDeletedVisibleCountries });
    case SET_CONTINENT:
      const continentCountries = state.countries.filter(country => country.continent === action.name);
      return Object.assign({}, state, { visibleCountries: continentCountries });
    default:
      return state;
  }
};

export default countriesReducer;
