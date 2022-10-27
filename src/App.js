import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    // hasTrunfo: false,
    isSaveButtonDisabled: true,
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
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
          state={
            [cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
              cardRare, cardTrunfo, isSaveButtonDisabled]
          }
          onInputChange={ this.handleChange }
        />
        <Card
          state={
            [cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
              cardRare, cardTrunfo, isSaveButtonDisabled]
          }
          onInputChange={ this.handleChange }
        />
      </div>
    );
  }
}

export default App;
// coment
