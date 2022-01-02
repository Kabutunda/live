import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import streamsReducer from './streamsReducer';

const [form, streams] = [formReducer, streamsReducer];
const reducers = combineReducers({ form, streams });

export default reducers;
