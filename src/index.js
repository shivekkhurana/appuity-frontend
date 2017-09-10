import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import 'index.css';
import registerServiceWorker from 'utils/registerServiceWorker';
import store from 'store';

import Home from 'pages/Home';
import Analysis from 'pages/Analysis';

const App = () => (
  <Router>
    <Provider store={store}>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/analysis/:playStoreId' component={Analysis} />
      </div>
    </Provider>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
