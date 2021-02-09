import React from 'react';
import { Provider } from 'react-redux';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import store from '../reducers/index';

const App = () => (
  <Provider store={store}>
    <BooksList />
    <BooksForm />
  </Provider>
);

export default App;
