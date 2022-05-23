import React from 'react';
import ReactDom from 'react-dom/client';

import App  from './apps/app_login.js';
import './utilities/style_login.css';

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App />);