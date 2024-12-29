import { INavigationItem, INavigationProviderProps } from "@typesrc/context/Navigation";
import { NavigationContext } from "./Navigation";
import { useState } from "react";
import { defaultRoutes } from "./NavigationRoutes";
import { pathMatches } from "util/path";

export default function NavigationProvider({
    children
}: INavigationProviderProps) {

    const [items, setItems] = useState<INavigationItem[]>(defaultRoutes);
    const [navbarOpen, setNavbarOpen] = useState(false);

    const toggleNavbar = () => setNavbarOpen(!navbarOpen);
    const closeNavbar = () => setNavbarOpen(false);
    const openNavbar = () => setNavbarOpen(true);
    const getActiveItem = (path: string) => items.filter(item => pathMatches(item.path, path))[0];

    return (
        <NavigationContext.Provider
            value={{
                items,
                navbarOpen,
                toggleNavbar,
                closeNavbar,
                openNavbar,
                getActiveItem
            }}
        >
            {children}
        </NavigationContext.Provider>
    );
}