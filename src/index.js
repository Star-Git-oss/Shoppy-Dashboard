import ReactDOM from 'react-dom';
import React from 'react';


import './index.css';
import App from './App.jsx';
import { ContextProvider } from './contexts/ContextProvider.js';


ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>,
    document.getElementById('root')
);
