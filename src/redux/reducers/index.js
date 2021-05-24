import {combineReducers} from 'redux';
import weather from './weather';
const appReducer = combineReducers(
  Object.assign({
    weather,
  }),
);

export default appReducer;
