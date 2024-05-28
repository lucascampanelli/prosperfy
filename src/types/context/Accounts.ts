import { ReactNode } from "react";

export interface IAccount {
    id: number;
    name: string;
    balance: number;
    updatedAt: Date;
}

export interface IAccountsContext {
    accounts: IAccount[];
    addAccount: (account: Omit<IAccount, "id" | "updatedAt">) => void;
    removeAccount: (id: number) => void;
    refreshBalance: (id: number) => void;
}

export interface IAccountsProviderProps {
    children: ReactNode;
}