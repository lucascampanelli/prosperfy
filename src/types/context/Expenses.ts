import { ReactNode } from "react";
import { IAccount } from "./Accounts";
import { IExpenseSource } from "./ExpenseSources";
import { IFile } from "./Files";

export interface IExpense {
    id: number;
    value: number;
    date: Date;
    expenses: IExpense[];
    account: IAccount;
    source: IExpenseSource;
    file: IFile;
}

export interface IExpensesContext {
    expenses: IExpense[];
    addExpense: (expense: Omit<IExpense, "id">) => void;
    removeExpense: (id: number) => void;
}

export interface IExpensesProviderProps {
    children: ReactNode;
}