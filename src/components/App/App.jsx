import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Root from '../Root/Root';

import './App.scss';

function App() {
    return (
        <BrowserRouter>
            <Root />
        </BrowserRouter>
    );
}

export default App;
