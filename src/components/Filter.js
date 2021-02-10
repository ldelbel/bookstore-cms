import React from 'react';
import PropTypes from 'prop-types';
import { CATEGORIES } from '../constants/index';

const CategoryFilter = props => {
  const handleChange = target => {
    const { text } = target.options[target.selectedIndex];
    props.handleChangeFilter(text);
  };

  return (
    <>
      <span>Filter Search</span>
      <select onChange={e => handleChange(e.target)} defaultValue="defaultOption">
        <option key="defaultOption" value="defaultOption" disabled>
          Please Select Category
        </option>
        {CATEGORIES.map(category => (
          <option key={`${category}`}>{category}</option>
        ))}
      </select>
    </>
  );
};

CategoryFilter.propTypes = {
  handleChangeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
