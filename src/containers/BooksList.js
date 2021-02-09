import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import mapBooksToProps from '../helpers/index';

const BooksList = props => {
  const { books } = props;
  console.log(books);
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

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
    }),
  ).isRequired,
};

export default connect(mapBooksToProps)(BooksList);
