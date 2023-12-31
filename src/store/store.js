import { legacy_createStore as createStore ,applyMiddleware ,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { quoteByTagReducer, randomQuoteReducer, tagsReducer } from '../reducers/reducers';



const rootReducer = combineReducers({
    randomQuote : randomQuoteReducer,
    tags :tagsReducer,
    quoteByTag : quoteByTagReducer,
});



const store = createStore(rootReducer,applyMiddleware(thunk));







export default store;