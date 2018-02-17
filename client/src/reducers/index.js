import { combineReducers } from 'redux';
import quotesReducer from './quotes_reducer'
import charactersReducer from './characters_reducer'

const rootReducer = combineReducers({
  quotes: quotesReducer,
  characters: charactersReducer
});

export default rootReducer;