import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.getElementById("app"));

