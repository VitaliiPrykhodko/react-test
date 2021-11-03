import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ changeMessage, label }) => (
  <button type="button" onClick={changeMessage}>
    {label}
  </button>
);

class App extends Component {
  state = {
    message: new Date().toLocaleTimeString(),
  };

  // Метод який будемо передавати в Button для виклику при кліку
  updateMessage = evt => {
    console.log(evt); // Доступний об'єкт події

    this.setState({
      message: new Date().toLocaleTimeString(),
    });
  };

  render() {
    return (
      <>
        <span>{this.state.message}</span>
        <Button label="Change message" changeMessage={this.updateMessage} />
      </>
    );
  }
}



ReactDOM.render(<App/>, document.getElementById('root'));

