import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import ErrorBoundary from './components/ErrorBoundary';

ReactDOM.render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
  document.getElementById('root')
);
