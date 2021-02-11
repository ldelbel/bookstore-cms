import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import mapBooksToProps from '../helpers/index';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/Filter';

const BooksList = props => {
  const { books } = props;

  const handleRemoveBook = book => {
    props.removeBook(book);
  };

  const handleChangeFilter = filter => {
    props.changeFilter(filter);
  };

  return (
    <>
      <CategoryFilter handleChangeFilter={handleChangeFilter} />

      {books.map(book => (
        <Book
          key={`${book.title}-${book.id}`}
          book={book}
          handleRemoveBook={handleRemoveBook}
        />
      ))}
    </>
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
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default connect(mapBooksToProps, { removeBook, changeFilter })(
  BooksList,
);
