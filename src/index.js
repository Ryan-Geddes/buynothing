import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import { Auth0Provider } from "@auth0/auth0-react";

console.log('redirect:', process.env.REACT_APP_REDIRECT)


ReactDOM.render(
  <React.StrictMode>
      <Auth0Provider
        domain="davee1234.us.auth0.com"
        clientId="ZH1REh7iBjpJQZAstfxzYBUQpGFEUIDF"
        redirectUri={`${process.env.REACT_APP_REDIRECT}`}
      >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
