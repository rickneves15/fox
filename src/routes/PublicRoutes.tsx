import React, { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

import LayoutDefault from '../Layout';
import { RoutesProps } from '../utils/interfaces/routes';

const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const PublicRoutes: RoutesProps[] = [
    {
        path: '/',
        element: <LayoutDefault />,
        children: [
            { index: true, name: 'Home', icon: 'home', element: <Home />, showSidebar: true },
            { path: '/about', name: 'Info', icon: 'info', element: <Home title="About" />, showSidebar: true },
            { path: '*', element: <NotFound /> },
        ],
    },
];

export const Routes = () => {
    const elements = useRoutes(PublicRoutes);

    return <React.Fragment>{elements}</React.Fragment>;
};
