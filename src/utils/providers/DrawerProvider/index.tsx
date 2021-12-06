import React, { ReactNode } from 'react';
import { DrawerContext } from '../../context/DrawerContext';

interface DrawerProviderProps {
    children: ReactNode;
}

const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }: DrawerProviderProps) => {
    const [open, setOpen] = React.useState<boolean>(false);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    return <DrawerContext.Provider value={{ open, handleDrawerToggle }}>{children}</DrawerContext.Provider>;
};

export default DrawerProvider;
