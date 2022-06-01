import React from 'react';
import RactDom from 'react-dom/client';

import Header from './components/students/st_header';
import Aside from './components/students/st_aside';
import Main from './components/students/st_main'

const App = () => {
    return(
        <>
            <Header />
            <Aside />
            <Main />
        </>
    );
}

export default App;