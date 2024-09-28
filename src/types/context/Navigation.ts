import { ReactNode } from "react";

export interface INavigationItem {
    title: string;
    path: string;
    icon: ReactNode;
    activeIcon: ReactNode;
    fixed?: boolean;
}

export interface INavigationContext {
    items: INavigationItem[];
    navbarOpen: boolean;
    toggleNavbar: () => void;
    closeNavbar: () => void;
    openNavbar: () => void;
    getActiveItem: (path: string) => INavigationItem | undefined;
}

export interface INavigationProviderProps {
    children: ReactNode;
}