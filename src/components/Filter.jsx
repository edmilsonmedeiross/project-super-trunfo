import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { filter, handleChange, filterRarit } = this.props;

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
        <label htmlFor="rarit-search">
          <span>Selecione uma raridade</span>
          <select
            data-testid="rare-filter"
            onChange={ handleChange }
            value={ filterRarit }
            name="filterRarit"
            id="rarit-search"
          >
            <option value="todas" id="rarit-search"> todas </option>
            <option value="normal" id="rarit-search"> normal </option>
            <option value="raro" id="rarit-search"> raro </option>
            <option value="muito raro" id="rarit-search"> muito raro </option>
          </select>
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  filterRarit: PropTypes.string.isRequired,
};

export default Filter;
