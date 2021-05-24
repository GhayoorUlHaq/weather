import {takeLatest} from 'redux-saga/effects';
import * as types from '../actions/types';
import {Api, endPoints} from '../../utils';

export function* getWeather() {
  yield takeLatest(types.CITIES_API_REQUEST, getAllCities);
}
function* getAllCities(params) {
  try {
    let response = yield Api.getAxios(endPoints.getCities);
    if (response.statusText === 'OK') {
      params.cbSuccess(response?.data?.list);
    } else {
      params.cbFailure(response?.message || 'Failed to load weather data');
    }
  } catch (error) {
    params.cbFailure(error?.message);
  }
}
