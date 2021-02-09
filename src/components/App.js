import React from 'react';
import BooksList from '../containers/BookList';
import BooksForm from '../containers/BooksForm';

const App = () => {
  return (
    <div>
      <BooksList />
      <BooksForm />
    </div>
  );
};

export default App;
