import _mapKeys from 'lodash/mapKeys';
import { HANDLE_FETCH_STREAMS, HANDLE_FETCH_STREAM } from '../actions/types';


const streamsReducer = (state = {}, action) => {
  switch (action.type) {
    case HANDLE_FETCH_STREAMS:
      return { ...state, ..._mapKeys(action.payload.data, '1') };
    case HANDLE_FETCH_STREAM:
    default:
      return state;
  }
};

export default streamsReducer;
