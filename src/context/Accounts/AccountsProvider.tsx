import { IAccount, IAccountsProviderProps } from "@typesrc/context/Accounts";
import { useState } from "react";
import { AccountsContext } from "./Accounts";

export default function AccountsProvider({
    children
}: IAccountsProviderProps) {

    const defaultAccounts: IAccount[] = [
        {
            id: 1,
            name: "Nubank",
            balance: 1000,
            updatedAt: new Date(),
            color: "#8a05be"
        },
        {
            id: 2,
            name: "Banco do Brasil",
            balance: 500,
            updatedAt: new Date(),
            color: "#ebe234"
        },
        {
            id: 3,
            name: "Itaú",
            balance: 1500,
            updatedAt: new Date(),
            color: "#ff8100"
        },
        {
            id: 4,
            name: "Santander",
            balance: 2000,
            updatedAt: new Date(),
            color: "#ff0000"
        },
        {
            id: 5,
            name: "Bradesco",
            balance: 289778,
            updatedAt: new Date(),
            color: "#ff0044"
        },
        {
            id: 6,
            name: "Caixa",
            balance: 3000,
            updatedAt: new Date(),
            color: "#3461eb"
        },
        {
            id: 7,
            name: "PicPay",
            balance: 13500,
            updatedAt: new Date(),
            color: "#00fa5f"
        },
        {
            id: 8,
            name: "Mercado Pago",
            balance: 100,
            updatedAt: new Date(),
            color: "#03bafc"
        }
    ]

    const [accounts, setAccounts] = useState<IAccount[]>(defaultAccounts);

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