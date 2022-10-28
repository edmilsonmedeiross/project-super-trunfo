import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { filter, handleChange } = this.props;

    return (
      <div>
        <label htmlFor="filter-name">
          Buscar
          <input
            data-testid="name-filter"
            onChange={ handleChange }
            id="filter-name"
            name="filter"
            value={ filter }
            type="text"
            placeholder="Busque uma carta"
          />
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Filter;
