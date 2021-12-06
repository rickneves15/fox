import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, List as MUIList, ListItem, ListItemIcon, ListItemText } from '@mui/material';

import { ChildRoutesProps } from '../../../utils/interfaces/routes';
import { PublicRoutes } from '../../../routes/PublicRoutes';

function List() {
    return (
        <>
            <MUIList>
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
            </MUIList>
        </>
    );
}

export default List;
