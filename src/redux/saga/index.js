import {fork} from 'redux-saga/effects';
import {getWeather} from './weather-saga';
export function* rootSaga() {
  yield fork(getWeather);
}
