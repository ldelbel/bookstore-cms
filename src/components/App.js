import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import store from '../reducers/index';
import { Provider } from 'react-redux';

const App = () => (
  <Provider store={store}>
    <BooksList />
    <BooksForm />
  </Provider>
);

export default App;
