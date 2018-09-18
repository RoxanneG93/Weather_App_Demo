import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
        // using props to use function defined in app.js
        <form onSubmit={this.props.getWeather}>
            <input type="text" name="city" placeholder="City..."/>
            <input type="text" name="country" placeholder="Country..."/>
            <button>Get Weather</button>
        </form>
    );
  }
}

export default Form;