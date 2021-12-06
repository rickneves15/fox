import { createContext } from 'react';

type DrawerContextType = {
    open: boolean;
    handleDrawerToggle: () => void;
};

export const DrawerContext = createContext({} as DrawerContextType);
