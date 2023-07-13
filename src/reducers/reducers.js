import {
  RANDOM_QUOTE_REQUEST,
  RANDOM_QUOTE_SUCCESS,
  RANDOM_QUOTE_FAILURE,
  FETCH_TAGS_REQUEST,
  FETCH_TAGS_SUCCESS,
  FETCH_TAGS_FAILURE,
} from "../actions/actions";

export const randomQuoteReducer = (state = null, action) => {
  switch (action.type) {
    case RANDOM_QUOTE_REQUEST:
      return null;
    case RANDOM_QUOTE_SUCCESS:
      return action.payload;
    case RANDOM_QUOTE_FAILURE:
      return null;
    default:
      return state;
  }
};

//tag

export const tagsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TAGS_REQUEST:
      return [];

    case FETCH_TAGS_SUCCESS:
      return action.payload;

    case FETCH_TAGS_FAILURE:
      return [];
    default:
      return state;
  }
};
