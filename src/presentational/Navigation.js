import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

const Navigation = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            <Link className="navbar-brand" to="/">
              Państwa.js
            </Link>{' '}
            <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            <Link to="/countries">Countries</Link>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            <Link to="/continents">Continents</Link>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            <Link to="/contact">Contact</Link>
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
