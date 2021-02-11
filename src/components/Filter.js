import React from 'react';
import PropTypes from 'prop-types';
import { CATEGORIES } from '../constants/index';

const CategoryFilter = props => {
  const handleChange = target => {
    const { text } = target.options[target.selectedIndex];
    props.handleChangeFilter(text);
  };

  return (
    <div style={{ marginTop: '15px', marginBottom: '15px' }}>
      <span style={{
        fontSize: '14px',
        fontSamily: 'Montserrat, sans-serif',
        fontWeight: 'bold',
        letterSpacing: '0.5px',
        color: '#888888',
        marginRight: '30px',
      }}
      >
        FILTER CATEGORY&nbsp;
      </span>
      <select
        onChange={e => handleChange(e.target)}
        defaultValue="defaultOption"
        style={{
          color: '#c4c4c4',
          borderStyle: 'none',
          background: 'white',
        }}
      >

        <option key="defaultOption" value="defaultOption" disabled>
          Please Select Category
        </option>
        {CATEGORIES.map(category => (
          <option key={`${category}`}>{category}</option>
        ))}
      </select>
    </div>

  );
};

CategoryFilter.propTypes = {
  handleChangeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
