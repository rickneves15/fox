import { useContext } from 'react';
import { DrawerContext } from '../../context/DrawerContext';

export const useDrawer = () => {
    const context = useContext(DrawerContext);

    return context;
};
