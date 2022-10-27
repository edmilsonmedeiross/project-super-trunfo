import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      onInputChange,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onSaveButtonClick,
    } = this.props;

    return (
      <form action="" className="form">
        <label htmlFor="name" className="name">
          <span>Nome da carta</span>
          <input
            data-testid="name-input"
            onChange={ onInputChange }
            value={ cardName }
            type="text"
            name="cardName"
            id="name"
          />
        </label>
        <label htmlFor="description" className="description">
          <span>Descrição da carta</span>
          <textarea
            data-testid="description-input"
            onChange={ onInputChange }
            value={ cardDescription }
            name="cardDescription"
            id="description"
            cols="30"
            rows="10"
          >
            descreva aqui sua carta
          </textarea>
        </label>
        <label htmlFor="str" className="cardAttr1">
          <span>Força</span>
          <input
            data-testid="attr1-input"
            onChange={ onInputChange }
            value={ cardAttr1 }
            type="number"
            name="cardAttr1"
            id="str"
          />
        </label>
        <label htmlFor="sta" className="cardAttr2">
          <span>Stamina</span>
          <input
            data-testid="attr2-input"
            onChange={ onInputChange }
            value={ cardAttr2 }
            type="number"
            name="cardAttr2"
            id="sta"
          />
        </label>
        <label htmlFor="dex" className="cardAttr3">
          <span>Destreza</span>
          <input
            data-testid="attr3-input"
            onChange={ onInputChange }
            value={ cardAttr3 }
            type="number"
            name="cardAttr3"
            id="dex"
          />
        </label>
        <label htmlFor="img" className="cardImage">
          <span>Url da imagem</span>
          <input
            data-testid="image-input"
            onChange={ onInputChange }
            value={ cardImage }
            type="text"
            name="cardImage"
            id="img"
          />
        </label>
        <label htmlFor="rarit" className="cardRare">
          <span>Raridade</span>
          <select
            data-testid="rare-input"
            onChange={ onInputChange }
            value={ cardRare }
            name="cardRare"
            id="rarit"
          >
            <option value="normal" id="rarit"> normal </option>
            <option value="raro" id="rarit"> raro </option>
            <option value="muito raro" id="rarit"> muito raro </option>
          </select>
        </label>
        { hasTrunfo
          ? (
            <span>Você já tem um Super Trunfo em seu baralho</span>
          )
          : (
            <label htmlFor="trunfo" className="cardTrunfo">
              <span>Super Trunfo</span>
              <input
                data-testid="trunfo-input"
                onChange={ onInputChange }
                checked={ cardTrunfo }
                type="checkbox"
                name="cardTrunfo"
                id="trunfo"
              />
            </label>)}
        <button
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  hasTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;

/* state: PropTypes.arrayOf(PropTypes.shape).isRequired,
*/
