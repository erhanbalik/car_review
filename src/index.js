import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider 
  domain="dev-qfcs938y.us.auth0.com"
  clientId="3xot6NFywbF7rIX9L3W9CXJpTTUcQcZR"
  redirectUri={window.location.origin}
  >
        <App />
  </Auth0Provider>
);


