import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import './country.css';
import Navigation from './presentational/Navigation';
import Home from './presentational/Home';
import Contact from './presentational/Contact';
import NotFound from './presentational/NotFound';
import CountryFlagContainer from './containers/CountryFlagContainer';
import CountryDetailsContainer from './containers/CountryDetailsContainer';
import ContinentsContainer from './containers/ContinentsContainer';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route patch="/" component={Navigation} />
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/countries" component={CountryFlagContainer} />
          <Route exact path="/countries/country/:id" component={CountryDetailsContainer} />
          <Route exact path="/continents" component={ContinentsContainer} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
