import * as TYPES from '../types';

// Get cities
export const getCities = (cbSuccess, cbFailure) => {
  return {
    type: TYPES.CITIES_API_REQUEST,
    cbSuccess,
    cbFailure,
  };
};
