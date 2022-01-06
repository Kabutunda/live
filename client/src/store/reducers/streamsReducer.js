import { HANDLE_FETCH_STREAM } from '../actions/types';

const streamsReducer = (state = {}, action) => {
  switch (action.type) {
    case HANDLE_FETCH_STREAM:
    default:
      return state;
  }
};

export default streamsReducer;
