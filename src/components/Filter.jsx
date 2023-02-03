import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { filter, handleChange, filterRarit, sTrunfo } = this.props;

    return (
      <div className="filter">
        <label className="inputFilterLabel" htmlFor="filter-name">
          <input
            className="inputText"
            data-testid="name-filter"
            disabled={ sTrunfo }
            onChange={ handleChange }
            id="filter-name"
            name="filter"
            value={ filter }
            type="text"
            placeholder="Busque uma carta"
          />
        </label>
        <label className="inputFilterLabel" htmlFor="rarit-search">
          <select
            data-testid="rare-filter"
            disabled={ sTrunfo }
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
        <label className="inputFilterLabel" htmlFor="sTrunfo">
          <span className="textStrunfo">Super Trunfo</span>
          <input
            data-testid="trunfo-filter"
            onChange={ handleChange }
            checked={ sTrunfo }
            type="checkbox"
            name="sTrunfo"
            id="sTrunfo"
          />
        </label>
      </div>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  filterRarit: PropTypes.string.isRequired,
  sTrunfo: PropTypes.bool.isRequired,
};

export default Filter;
