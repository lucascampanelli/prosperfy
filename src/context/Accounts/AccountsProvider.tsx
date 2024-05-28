import { IAccount, IAccountsProviderProps } from "@typesrc/context/Accounts";
import { useState } from "react";
import { AccountsContext } from "./Accounts";

export default function AccountsProvider({
    children
}: IAccountsProviderProps) {

    const [accounts, setAccounts] = useState<IAccount[]>([]);

    return (
        <AccountsContext.Provider
            value={{
                accounts,
                addAccount: () => { },
                removeAccount: () => { },
                refreshBalance: () => { }
            }}
        >
            {children}
        </AccountsContext.Provider>
    )
}