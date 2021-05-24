import * as TYPES from '../types';

// Get cities
export const getCities = (cbSuccess, cbFailure) => {
  return {
    type: TYPES.CITIES_API_REQUEST,
    cbSuccess,
    cbFailure,
  };
};

// Get cities
export const getCurrentWeather = (params, cbSuccess, cbFailure) => {
  return {
    type: TYPES.CURRENT_WEATHER_API_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
