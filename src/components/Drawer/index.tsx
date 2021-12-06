import React from 'react';
import { Divider, Icon, IconButton, styled, SwipeableDrawer, useTheme } from '@mui/material';

import { useDrawer } from '../../utils/hooks/useDrawer';
import List from './List';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
}));

const Drawer = () => {
    const theme = useTheme();
    const { handleDrawerToggle, open } = useDrawer();
    return (
        <SwipeableDrawer
            anchor="left"
            open={open}
            onClose={handleDrawerToggle}
            onOpen={handleDrawerToggle}
            onClick={handleDrawerToggle}
            onKeyDown={handleDrawerToggle}
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}>
            <DrawerHeader>
                <IconButton onClick={handleDrawerToggle}>
                    {theme.direction === 'ltr' ? <Icon>chevron_left</Icon> : <Icon>chevron_right</Icon>}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List />
        </SwipeableDrawer>
    );
};

export default Drawer;
