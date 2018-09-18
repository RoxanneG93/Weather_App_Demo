import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDom is rendering the imported AppJs component to the element root
// Method Taking two arguments: App component name and the location to put it
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
