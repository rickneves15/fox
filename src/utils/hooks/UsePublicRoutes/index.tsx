import React, { ReactNode } from 'react';

interface PublicRoutesProps {
    children: ReactNode;
}

function UsePublicRoutes({ children }: PublicRoutesProps) {
    return (
        <React.Fragment>
            <h1>PublicRoutes</h1>
            {children}
        </React.Fragment>
    );
}

export default UsePublicRoutes;
