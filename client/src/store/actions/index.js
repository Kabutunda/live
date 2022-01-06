import { HANDLE_FETCH_STREAM } from './types';
import streamsApi from '../../api/streams';

export const handleFetchStream = () => async (dispatch) => {
  const response = await streamsApi.get(`/streams/1`);
  const { data } = response;
  dispatch({
    type: HANDLE_FETCH_STREAM,
    payload: { data },
  });
};
