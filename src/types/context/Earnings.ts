import { ReactNode } from "react";
import { IAccount } from "./Accounts";
import { IEarningSource } from "./EarningSources";
import { IFile } from "./Files";

export interface IEarning {
    id: number;
    value: number;
    date: Date;
    earnings: IEarning[];
    account: IAccount;
    source: IEarningSource;
    file: IFile;
}

export interface IEarningsContext {
    earnings: IEarning[];
    addEarning: (earning: Omit<IEarning, "id">) => void;
    removeEarning: (id: number) => void;
}

export interface IEarningsProviderProps {
    children: ReactNode;
}