import { ReactNode } from "react";

export interface INavigationItem {
    title: string;
    path: string;
    icon: ReactNode;
    activeIcon: ReactNode;
}

export interface INavigationContext {
    items: INavigationItem[];
    navbarOpen: boolean;
    toggleNavbar: () => void;
    closeNavbar: () => void;
    openNavbar: () => void;
}

export interface INavigationProviderProps {
    children: ReactNode;
}