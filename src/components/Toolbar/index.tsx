import React from 'react';
import { AppBar, Icon, IconButton, Toolbar as MUIToolbar, Typography } from '@mui/material';
import { useDrawer } from '../../utils/hooks/useDrawer';

const Toolbar = () => {
    const { handleDrawerToggle } = useDrawer();
    return (
        <AppBar position="static">
            <MUIToolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
                    <Icon>menu</Icon>
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                    Fox
                </Typography>
            </MUIToolbar>
        </AppBar>
    );
};

export default Toolbar;
