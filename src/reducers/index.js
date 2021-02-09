import { createStore } from 'redux';
import booksReducer from './books';

const store = createStore(booksReducer);

export default store;
