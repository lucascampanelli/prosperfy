import { ReactNode } from "react";

export interface IExpenseCategory {
    id: number;
    name: string;
}

export interface IExpenseSource {
    id: number;
    name: string;
    categories: IExpenseCategory[];
}

export interface IExpenseSourcesContext {
    expenseSources: IExpenseSource[];
    addExpenseSource: (expenseSource: Omit<IExpenseSource, "id">) => void;
    removeExpenseSource: (id: number) => void;
}

export interface IExpenseSourcesProviderProps {
    children: ReactNode;
}