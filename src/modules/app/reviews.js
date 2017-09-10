import api from 'utils/api';

export default function reducer(state={}, action) {
  switch (action.type) {
    case 'app.reviews.fetchingByPlayStoreId': 
      return {...state, fetchingByPlayStoreId: true};

    case 'app.reviews.fetchSuccess':
      return {...state, fetchingByPlayStoreId: false, ...action.res};

    case 'app.reviews.clear':
      return {...state, fetchingByPlayStoreId: false, collection: []};

    default: 
      return state;
  }
}

// actions
export function fetchByPlayStoreId(playStoreId) {
  return (dispatch) => {
    dispatch({type: 'app.reviews.fetchingByPlayStoreId'});
    api
      .get(`/apps/${playStoreId}/reviews`)
      .then(res => {
        dispatch({type: 'app.reviews.fetchSuccess', res});
      })
      .catch(err => {
        dispatch({type: 'app.reviews.fetchError', err});
      })
    ;
  };
}

export function clear() {
  return {
    type: 'app.reviews.clear'
  };
}