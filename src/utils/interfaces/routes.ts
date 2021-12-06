import { RouteObject } from 'react-router-dom';

export type ChildRoutesProps = RouteObject & {
    name?: string;
    icon?: string;
    showSidebar?: boolean;
};

export type RoutesProps = RouteObject & {
    children: ChildRoutesProps[];
};
