import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Codeditor from './codeEditor';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(<Codeditor />, document.getElementById('editor'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
=======
import {render} from 'react-dom';
import App from "./components/App.js";

render(<App/>, document.getElementById("root"));
>>>>>>> c048b3d433bb32659ce33844b711d2b786ccc2c0
