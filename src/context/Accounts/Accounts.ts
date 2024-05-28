import { IAccountsContext } from "@typesrc/context/Accounts";
import { createContext, useContext } from "react";

export const AccountsContext = createContext<IAccountsContext>({
    accounts: [],
    addAccount: () => { },
    removeAccount: () => { },
    refreshBalance: () => { }
});

export const useAccountsContext = () => useContext(AccountsContext); 