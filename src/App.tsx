import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import DrawerProvider from './utils/providers/DrawerProvider';

const App = function () {
    return (
        <DrawerProvider>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </DrawerProvider>
    );
};

export default App;
