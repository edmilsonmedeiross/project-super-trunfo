import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form action="">
        <label htmlFor="name">
          <span>Nome da carta</span>
          <input
            data-testid="name-input"
            type="text"
            name="name"
            id="name"
          />
        </label>
        <label htmlFor="description">
          <span>Descrição da carta</span>
          <textarea
            data-testid="description-input"
            name="description"
            id="description"
            cols="30"
            rows="10"
          >
            descreva aqui sua carta
          </textarea>
        </label>
        <label htmlFor="str">
          <span>Força</span>
          <input
            data-testid="attr1-input"
            type="number"
            name="str"
            id="str"
          />
        </label>
        <label htmlFor="sta">
          <span>Stamina</span>
          <input
            data-testid="attr2-input"
            type="number"
            name="sta"
            id="sta"
          />
        </label>
        <label htmlFor="dex">
          <span>Destreza</span>
          <input
            data-testid="attr3-input"
            type="number"
            name="dex"
            id="dex"
          />
        </label>
        <label htmlFor="img">
          <span>Url da imagem</span>
          <input
            data-testid="image-input"
            type="text"
            name="img"
            id="img"
          />
        </label>
        <label htmlFor="rarit">
          <span>Raridade</span>
          <select
            data-testid="rare-input"
            name="rarit"
            id="rarit"
          >
            <option id="rarit"> normal </option>
            <option id="rarit"> raro </option>
            <option id="rarit"> muito raro </option>
          </select>
        </label>
        <label htmlFor="trunfo">
          <span>Super Trunfo</span>
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="trunfo"
            id="trunfo"
          />
        </label>
        <button
          type="button"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
