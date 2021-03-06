import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';

import SuspenseSpinner from '../components/SuspenseFallback';
import { PublicRoutes } from './PublicRoutes';

//https://reactrouter.com/docs/en/v6

const Routes = () => {
    const publicRoutes = useRoutes(PublicRoutes);

    return (
        <Suspense fallback={<SuspenseSpinner />}>
            <div>{publicRoutes}</div>
        </Suspense>
    );
};

export default Routes;
