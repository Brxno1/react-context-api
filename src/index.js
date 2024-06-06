import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import './styles/global-styles.css';

import { Home } from './templates/Home';
import { CounterContextProvider } from './Contexts/CounterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <CounterContextProvider>
      <Home />
    </CounterContextProvider>
  </StrictMode>,
);
