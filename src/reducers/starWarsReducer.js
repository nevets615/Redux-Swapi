import {
FETCH_STARWARS_START,
FETCH_STARWARS_SUCCESS,
FETCH_STARWARS_FAILURE} 
from "../actions";

const initialState = {
  characters: [],
  error: '',
  isFetching: false
};

  // Array characters, Boolean fetching, null error.

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STARWARS_START:
      return {
        ...state,
        error: '',
        isFetching: true
      };
    case FETCH_STARWARS_SUCCESS:
      return {
        ...state,
        error: '',
        isFetching: false,
        characters: action.payload
      };
    case FETCH_STARWARS_FAILURE:
    return {
      ...state,
      loading: false
    }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
