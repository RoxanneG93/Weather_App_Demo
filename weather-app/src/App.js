import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// To view made compoents we have to make sure to import them
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "70dd0975117fc92c2c116f05820162fc";

// class initializes component
// React.Component is a object somewhere in our modules
class App extends Component {

  // Need to use this Method if using any ver of React below 16
  // apparently we can leave out contructors all together
  // ==============================================
  // constructor(){
  //   this.getWeather = this.getWeather.bind(this);
  // }

  // getWeather(){

  // }
  // ==================================================
  // NOW WE CAN USE NEWER ES6 ARROW FUNCTIONS INSTEAD 
  // the function will still get 'bound' to the App component
  getWeather = async (e) => {
    e.preventDefault();
    const api_call = await fetch(`https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`, {
      mode: 'no-cors',
      method: 'GET',
      headers: {'Content-Type':'application/json'}
    })
    const data = await api_call.json();
    console.log(data);
  }

  // render built in REACT method that goes inside the components
  // It's how react displays the JSX to our view
  render() {
    return (
      // This looks like html but it's JSX, javascript running in the background
      <div className="App">
      <Titles />
      {/* Setting the prop in the Form component lets the Form.js have access to the func */}
      <Form getWeather={this.getWeather} />
      <Weather />
        {/* <h1>TEST</h1> */}
        {/* Only one parent component at a time */}
      </div>
    );
  }
}

export default App;
