import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {combineReducers} from 'redux'

import apps from 'modules/apps';
import appReviews from 'modules/app/reviews';

const rootReducer = combineReducers({
  apps,
  app: combineReducers({
    reviews: appReviews
  })
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
