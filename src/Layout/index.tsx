import React from 'react';
import { Outlet as PageView, Link } from 'react-router-dom';
import { CssBaseline, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Icon from '@mui/material/Icon';

import { ChildRoutesProps } from '../utils/interfaces/routes';
import { PublicRoutes } from '../routes/PublicRoutes';
import Toolbar from '../components/Toolbar';
import Drawer from '../components/Drawer';
import { Box } from '@mui/system';

const LayoutDefault = () => {
    return (
        <Box minHeight="100%">
            <Box flexDirection="row" alignItems="initial" justifyContent="initial" maxWidth="100vw" flex="1 0">
                <Toolbar />
                <CssBaseline />
                <Box flexDirection="column" component="main">
                    <Drawer>
                        <List>
                            {PublicRoutes.map(({ children }) =>
                                children
                                    .filter((route: ChildRoutesProps) => route.showSidebar)
                                    .map(({ name, icon, path = '/' }: ChildRoutesProps) => (
                                        <ListItem button key={path} to={path} component={Link}>
                                            <ListItemIcon>
                                                <Icon>{icon}</Icon>
                                            </ListItemIcon>
                                            <ListItemText primary={name} />
                                        </ListItem>
                                    ))
                            )}
                        </List>
                    </Drawer>
                    <PageView />
                </Box>
            </Box>
        </Box>
    );
};

export default LayoutDefault;
