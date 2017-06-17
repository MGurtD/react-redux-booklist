import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBookReducer from './reducer_active_book';

const rootReducer = combineReducers({
  // Set data to Redux state keys (pieces)
  books : BooksReducer,
  activeBook : ActiveBookReducer
});

export default rootReducer;
