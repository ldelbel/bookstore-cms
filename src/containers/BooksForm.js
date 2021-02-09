import React from 'react';
import { CATEGORIES } from '../constants/index';

const BooksForm = () => (
  <form>
    <input type="text" />
    <select>
      {CATEGORIES.map(category => (
        <option key={`${category}`}>{category}</option>
      ))}
    </select>
    <input type="submit" />
  </form>
);

export default BooksForm;
