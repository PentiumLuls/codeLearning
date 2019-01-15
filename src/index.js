import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Codeditor from './codeEditor';
import * as serviceWorker from './serviceWorker';

const console = document.querySelector('#terminal'),
      debug = document.getElementById('debug');


ReactDOM.render(<Codeditor />, document.getElementById('editor'));

debug.addEventListener('click', (e) => {
     console.log("click");
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
