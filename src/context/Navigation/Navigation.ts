import { INavigationContext } from "@typesrc/context/Navigation";
import { createContext, useContext } from "react";

export const NavigationContext = createContext<INavigationContext>({
    items: [],
    navbarOpen: false,
    toggleNavbar: () => {},
    closeNavbar: () => {},
    openNavbar: () => {},
    getActiveItem: () => undefined
});

export const useNavigationContext = () => useContext(NavigationContext);