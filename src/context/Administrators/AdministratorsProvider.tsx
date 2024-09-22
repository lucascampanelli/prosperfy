import { IAdministrator, IAdministratorsProviderProps } from "@typesrc/context/Administrators";
import { useState } from "react";
import { AdministratorsContext } from "./Administrators";

export default function AdministratorsProvider({
    children
}: IAdministratorsProviderProps) {

    const [administrators, setAdministrators] = useState<IAdministrator[]>([]);

    return (
        <AdministratorsContext.Provider
            value={{
                administrators,
                addAdministrator: () => { },
                removeAdministrator: () => { }
            }}
        >
            {children}
        </AdministratorsContext.Provider>
    )
}