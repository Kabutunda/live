import { combineReducers } from 'redux';
import streamsReducer from './streamsReducer';

const [streams] = [streamsReducer];
const reducers = combineReducers({ streams });

export default reducers;
