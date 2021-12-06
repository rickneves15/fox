import { ReactNode } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Divider, SwipeableDrawer, IconButton } from '@mui/material';
import Icon from '@mui/material/Icon';

import { useDrawer } from '../../utils/hooks/useDrawer';

interface DrawerProps {
    children: ReactNode;
}

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
}));

const Drawer = ({ children }: DrawerProps) => {
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
            {children}
        </SwipeableDrawer>
    );
};

export default Drawer;
