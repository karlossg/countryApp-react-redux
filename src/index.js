import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import App from './containers/App';
import Navigation from './presentational/Navigation';

import registerServiceWorker from './registerServiceWorker';

const FourOhFour = () => <h1>404: Page not found!</h1>;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route patch="/" component={Navigation} />
        <hr />
        <Switch>
          <Route exact path="/" component={App} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
