import { IAdministratorsContext } from "@typesrc/context/Administrators";
import { createContext, useContext } from "react";

export const AdministratorsContext = createContext<IAdministratorsContext>({
    administrators: [],
    addAdministrator: () => { },
    removeAdministrator: () => { }
});

export const useAdministratorsContext = () => useContext(AdministratorsContext);