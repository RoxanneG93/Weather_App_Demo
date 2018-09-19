import React, { Component } from "react";
import "./App.css";
// To view made compoents we have to make sure to import them
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "70dd0975117fc92c2c116f05820162fc";

// class initializes component
// React.Component is a object somewhere in our modules
class App extends Component {
  // The deprecated way of setting state
  // constructor(props){
  //   super(props);
  //   this.state = {

  //   }
  // }

  // INITIALIZING STATE in REACT16
  // ==================
  // the state is an object that contains key value pairs
  // setting initlial state
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

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
  // *** Here we are using FETCH for the api call, need to look into promises ****
  getWeather = async e => {
    e.preventDefault();
    // set variables for input values
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    const data = await api_call.json();
    // console.log(data.main.temp);
    // console.log( (9/5)*(data.main.temp - 273) + 32);
    console.log(data);

    // EXAMPLE OF WHAT NOT TO DO - MANIPULATE STATE DIRECTLY
    // this.state.temperature = api_stuff;

    // If statement so user can't submit black forms
    if (city && country) {
      const farenheight = Math.round((9 / 5) * (data.main.temp - 273) + 32);
      // THE CORRECT WAY to Set State
      this.setState({
        temperature: farenheight,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please Enter City & State"
      });
    }
  };

  // render built in REACT method that goes inside the components
  // It's how react displays the JSX to our view
  render() {
    // without JSX
    // return React.createElement(
    //   'div',
    //   { className: 'App'},
    //   React.createElement('h1', null, 'The App Component');
    // );

    return (
      // This looks like html but it's JSX, javascript running in the background
      <div className="App">
        <div className="wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-6 title-container">
                <Titles />
              </div>
              <div className="col-xs-12 col-md-6 form-container">
                {/* Setting the prop in the Form component lets the Form.js have access to the func */}
                <Form getWeather={this.getWeather} />
                <Weather
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                />
                {/* <h1>TEST</h1> */}
                {/* Only one parent component at a time */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
