import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import mapBooksToProps from '../helpers/index';

const BooksList = props => {
  const { books } = props;
  return (
    <table>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      {books.map(book => (
        <Book key={`${book.title}`} book={book} />
      ))}
    </table>
  );
};



export default connect(mapBooksToProps)(BooksList);
