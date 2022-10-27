import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    // hasTrunfo: false,
    isSaveButtonDisabled: true,
  };

  onSaveButtonClick = () => {

  };

  handleError = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const sum = 210;
    const inputNum1 = Number(cardAttr1);
    const inputNum2 = Number(cardAttr2);
    const inputNum3 = Number(cardAttr3);
    const limitAttr = 90;

    const validate = [
      !cardName.length,
      !cardDescription.length,
      !cardImage.length,
      !cardRare.length,
    ];
    const formIsValid = validate.every((input) => input !== true); // form todo preenchido true

    const sumOfNumberInputsValidate = (inputNum1 + inputNum2 + inputNum3) > sum; // true > 210

    const numberInputLonely = cardAttr1 > limitAttr // true > 90
    || cardAttr2 > limitAttr
    || cardAttr3 > limitAttr
    || cardAttr1 < 0
    || cardAttr2 < 0
    || cardAttr3 < 0;

    if (formIsValid && !sumOfNumberInputsValidate && !numberInputLonely) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.handleError);
  };

  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, // hasTrunfo,
      isSaveButtonDisabled } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.handleChange }
        />
      </div>
    );
  }
}

export default App;
// coment
