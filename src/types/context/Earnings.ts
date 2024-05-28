import { ReactNode } from "react";
import { IAccount } from "./Accounts";
import { IEarningSource } from "./EarningSources";

export interface IEarning {
    id: number;
    value: number;
    date: Date;
    earning: IEarning;
    account: IAccount;
    source: IEarningSource;
}

export interface IEarningsContext {
    earnings: IEarning[];
    addEarning: (earning: Omit<IEarning, "id">) => void;
    removeEarning: (id: number) => void;
}

export interface IEarningsProviderProps {
    children: ReactNode;
}