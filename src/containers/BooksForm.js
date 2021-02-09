import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';
import { CATEGORIES } from '../constants/index';

const BooksForm = props => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleChange = target => {
    if (target.tagName === 'INPUT') {
      setTitle(target.value);
    } else if (target.tagName === 'SELECT') {
      const { text } = target.options[target.selectedIndex];
      setCategory(text);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const book = {
      title,
      category,
    };
    props.createBook(book);
  };
  return (
    <form onSubmit={e => handleSubmit(e)}>
      <input
        onChange={e => handleChange(e.target)}
        value={title}
        type="text"
      />
      <select onChange={e => handleChange(e.target)} defaultValue="defaultOption">
        <option key="defaultOption" value="defaultOption" disabled>
          Select Book Category
        </option>
        {CATEGORIES.map(category => (
          <option key={`${category}`}>{category}</option>
        ))}
      </select>
      <input type="submit" value="Submit" />
    </form>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, { createBook })(BooksForm);
