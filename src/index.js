import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { Provider } from 'react-redux';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { store } from './store/configureStore';

const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql'
  });

ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <App/>
        </Provider> 
    </ApolloProvider>,
    document.getElementById("app"));

