import api from 'utils/api';
import {fetchByPlayStoreId as fetchReviewsByPlayStoreId} from 'modules/app/reviews';

export default function reducer(state={}, action) {
  switch (action.type) {
    case 'apps.fetchingByPlayStoreId': 
      return {...state, fetchingByPlayStoreId: true};

    case 'apps.fetchSuccess':
      return {...state, fetchingByPlayStoreId: false, ...action.res};

    default: 
      return state;
  }
}

// actions
export function fetchByPlayStoreId(playStoreId) {
  return (dispatch) => {
    dispatch({type: 'apps.fetchingByPlayStoreId'});
    api
      .get(`/apps/${playStoreId}`)
      .then(res => {
        dispatch({type: 'apps.fetchSuccess', res});
        dispatch(fetchReviewsByPlayStoreId(playStoreId));
      })
      .catch(err => {
        console.log(err);
        dispatch({type: 'apps.fetchError', err});
      })
    ;
  };
}
