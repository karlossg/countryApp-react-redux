import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../country.css';

const Navigation = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Państwa.js
          </Link>{' '}
          <span className="sr-only">(current)</span>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/countries">
            Countries
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/continents">
            Continents
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
