import { fetchQuote, fetchTags , fetchQuoteByTag} from "../api/api";


//action-types
export const RANDOM_QUOTE_REQUEST = 'RANDOM_QUOTE_REQUEST';
export const RANDOM_QUOTE_SUCCESS = 'RANDOM_QUOTE_SUCCESS';
export const RANDOM_QUOTE_FAILURE = 'RANDOM_QUOTE_FAILURE';
export const FETCH_TAGS_REQUEST = 'FETCH_TAGS_REQUEST';
export const FETCH_TAGS_SUCCESS = 'FETCH_TAGS_SUCCESS';
export const FETCH_TAGS_FAILURE = 'FETCH_TAGS_FAILURE';
export const FETCH_QUOTE_BY_TAG_REQUEST = 'FETCH_QUOTE_BY_TAG_REQUEST';
export const FETCH_QUOTE_BY_TAG_SUCCESS = 'FETCH_QUOTE_BY_TAG_SUCCESS';
export const FETCH_QUOTE_BY_TAG_FAILURE = 'FETCH_QUOTE_BY_TAG_FAILURE';


//actions
export const fetchRandomQuote = () => async (dispatch) => {
    dispatch({type: RANDOM_QUOTE_REQUEST});

    try {
        const quote = await fetchQuote('/random');
        dispatch({ type: RANDOM_QUOTE_SUCCESS, payload: quote});
    } catch (error) {
        dispatch({type : RANDOM_QUOTE_FAILURE, payload : error.message});
    }
}

export const fetchTagsAPI = () => async (dispatch) => {
    dispatch({ type : FETCH_TAGS_REQUEST});

    try {
        const tags = await fetchTags('/tags');
        dispatch({ type : FETCH_TAGS_SUCCESS, payload : tags});
    } catch (error) {
        dispatch({ type : FETCH_TAGS_FAILURE, payload : error.message});
    }
}

export const fetchQuoteByTagAPI = (tag) => async (dispatch) => {
    dispatch({ type : FETCH_QUOTE_BY_TAG_REQUEST});

    try {
       const quote = await fetchQuoteByTag(tag);
       dispatch({type: FETCH_QUOTE_BY_TAG_SUCCESS, payload: quote});
    } catch (error) {
        dispatch({type: FETCH_QUOTE_BY_TAG_FAILURE, payload: error.message});
    }
}