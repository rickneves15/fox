import React from 'react';
import { Outlet as PageView } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';

import Toolbar from '../components/Toolbar';
import Drawer from '../components/Drawer';

const LayoutDefault = () => {
    return (
        <Box minHeight="100vh">
            <Box flexDirection="row" alignItems="initial" justifyContent="initial" maxWidth="100vw" flex="1 0">
                <Toolbar />
                <CssBaseline />
                <Box flexDirection="column" component="main" mx={2}>
                    <Drawer />
                    <PageView />
                </Box>
            </Box>
        </Box>
    );
};

export default LayoutDefault;
