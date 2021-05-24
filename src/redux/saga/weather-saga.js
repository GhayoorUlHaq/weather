import {takeLatest} from 'redux-saga/effects';
import * as types from '../actions/types';
import {Api, endPoints} from '../../utils';

export function* getWeather() {
  yield takeLatest(types.CITIES_API_REQUEST, getAllCities);
  yield takeLatest(types.CURRENT_WEATHER_API_REQUEST, getCurrentWeather);
}
function* getAllCities(params) {
  try {
    let response = yield Api.getAxios(endPoints.getCities);
    if (response?.data?.list) {
      params.cbSuccess(response?.data?.list);
    } else {
      params.cbFailure(response?.message || 'Failed to load weather data');
    }
  } catch (error) {
    params.cbFailure(error?.message);
  }
}
function* getCurrentWeather(params) {
  try {
    let response = yield Api.getAxios(
      endPoints.getCurrentWeather(params.params?.lat, params.params?.lon),
    );
    console.log('response from saga: ', response);
    if (response?.data) {
      params.cbSuccess(response?.data);
    } else {
      params.cbFailure(response?.message || 'Failed to load weather data');
    }
  } catch (error) {
    params.cbFailure(error?.message);
  }
}
