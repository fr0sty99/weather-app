import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient(
  {
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/"
  });

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <div className='app'>
        <App />
      </div>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// uri: "https://graphql-weather-api.herokuapp.com/"