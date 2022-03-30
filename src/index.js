import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App.jsx';

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);