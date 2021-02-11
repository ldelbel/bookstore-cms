import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Navbar from './Navbar';

const App = () => (
  <>
    <Navbar />
    <div className="container mt-5">
      <BooksList />
      <BooksForm />
    </div>
  </>
);

export default App;
