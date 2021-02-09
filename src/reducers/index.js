import { combineReducers } from 'redux';
import booksReducer from './books';

const rootReducer = combineReducers({ booksReducer });
export default rootReducer;
