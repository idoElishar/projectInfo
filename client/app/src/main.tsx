import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApolloProvider } from '@apollo/client';
// import { Provider } from 'react-redux'
import client from './apolloClient/client.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <Provider store={store}>
  <ApolloProvider client={client}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ApolloProvider>
  // </Provider>

)
