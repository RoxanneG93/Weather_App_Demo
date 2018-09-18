import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class initializes component
// React.Component is a object somewhere in our modules
class App extends Component {
  // render built in REACT method that goes inside the components
  // It's how react displays the JSX to our view
  render() {
    return (
      // This looks like html but it's JSX, javascript running in the background
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>TEST</h1>
      </div>
    );
  }
}

export default App;
