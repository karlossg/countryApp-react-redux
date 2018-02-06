import { GET_COUNTRIES, GET_COUNTRY, DELETE_COUNTRY, SEARCH_COUNTRIES, SET_CONTINENT } from './countries-actions';

export function getCountries() {
  return {
    type: GET_COUNTRIES
  };
}

export function deleteCountry(id) {
  return {
    type: DELETE_COUNTRY,
    id
  };
}

export function getCountry(id) {
  return {
    type: GET_COUNTRY,
    id
  };
}

export function searchCountries(searchText) {
  return {
    type: SEARCH_COUNTRIES,
    searchText
  };
}

export function setContinent(name) {
  return {
    type: SET_CONTINENT,
    name
  };
}
