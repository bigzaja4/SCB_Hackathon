import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'

<<<<<<< HEAD
import D from '../src/views/Dashboard'
import Welcome from '../src/views/Welcome'
ReactDOM.render(<Welcome />, document.getElementById('root'));
=======
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
>>>>>>> 758fc90686ad2657b0fef1f8de48792ec8dc6a5c

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
