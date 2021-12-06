import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Routes from './routes';
import DrawerProvider from './utils/providers/DrawerProvider';

const theme = createTheme({
    palette: {
        mode: 'dark',
        // primary: {
        //     light: '#191a1b',
        //     main: '#191a1b',
        //     dark: '#191a1b',
        //     contrastText: '#d76e00',
        // },
    },
});

const App = function () {
    return (
        <ThemeProvider theme={theme}>
            <DrawerProvider>
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
            </DrawerProvider>
        </ThemeProvider>
    );
};

export default App;
