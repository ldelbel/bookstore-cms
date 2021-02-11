import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';
import { CATEGORIES } from '../constants/index';

const BooksForm = props => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('defaultOption');

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
    setTitle('');
    setCategory('defaultOption');
  };

  return (
    <div style={{ padding: '30px', marginBottom: '20px' }}>
      <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--gray)' }}>ADD NEW BOOK</h1>
      <form
        className="d-md-flex d-lg-flex justify-content-between align-items-lg-center mt-3"
        onSubmit={event => handleSubmit(event)}
      >
        <input
          type="text"
          className="col-lg-6"
          placeholder="Book title"
          value={title}
          onChange={e => handleChange(e.target)}
          style={{ height: '45px', border: '1px solid #E8E8E8' }}
        />
        <select
          className="col-lg-3"
          onChange={e => handleChange(e.target)}
          style={{ height: '45px', color: 'var(--gray)', border: '1px solid #E8E8E8' }}
          defaultValue="defaultOption"
        >
          <option key={7} value="defaultOption" disabled>
            Select book category
          </option>
          {CATEGORIES.map(category => (category !== 'All'
            ? (
              <option key={`${category}`}>{category}</option>
            ) : null))}
        </select>
        <input
          className="btn btn-primary col-lg-2"
          style={{ height: '45px', background: '#0290FF', fontSize: '13px' }}
          type="submit"
          value="ADD BOOK"
        />
      </form>
    </div>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, { createBook })(BooksForm);
