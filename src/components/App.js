import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Navbar from './Navbar';

const App = () => (
  <>
    <Navbar />
    <BooksList />
    <BooksForm />
  </>
);

export default App;
