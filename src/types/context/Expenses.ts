import { ReactNode } from "react";
import { IAccount } from "./Accounts";
import { IExpenseSource } from "./ExpenseSources";

export interface IExpense {
    id: number;
    value: number;
    date: Date;
    expense: IExpense;
    account: IAccount;
    source: IExpenseSource;
}

export interface IExpensesContext {
    expenses: IExpense[];
    addExpense: (expense: Omit<IExpense, "id">) => void;
    removeExpense: (id: number) => void;
}

export interface IExpensesProviderProps {
    children: ReactNode;
}