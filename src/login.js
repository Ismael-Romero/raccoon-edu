import React from 'react';
import ReactDom from 'react-dom/client';

import App from './apps/app_login.js';

const root = ReactDom.createRoot(document.getElementById('rootLogin'));
root.render(<App />);