import * as TYPES from '../actions/types';

const initialState = {
  list: [],
};

const weather = (state = initialState, actions) => {
  switch (actions.type) {
    case TYPES.CITIES_API_SUCCESS:
      return {
        ...state,
        list: actions.data,
      };
    default:
      return state;
  }
};
export default weather;
