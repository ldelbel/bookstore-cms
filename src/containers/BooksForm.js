import React, { useState } from 'react';
import { CATEGORIES } from '../constants/index';

const BooksForm = () => {
  const { title, setTitle } = useState('');
  const { category, setCategory } = useState('');

  const handleChange = (target) => {
    if (target.tagName === 'INPUT') {
      setTitle(target.value);
    } else if (target.tagName === 'SELECT') {
      const text = target.options[target.selectedIndex].text;
      setCategory(text);
    }
  };
  const handleSubmit = () => {};
  return (
    <form>
      <input
        onChange={(e) => handleChange(e.target)}
        value={title}
        type="text"
      />
      <select onChange={(e) => handleChange(e.target)}>
        {CATEGORIES.map((category) => (
          <option key={`${category}`}>{category}</option>
        ))}
      </select>
      <input type="submit" />
    </form>
  );
};

export default BooksForm;
