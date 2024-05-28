import { IExpenseSourcesContext } from "@typesrc/context/ExpenseSources";
import { createContext, useContext } from "react";

export const ExpenseSourcesContext = createContext<IExpenseSourcesContext>({
    expenseSources: [],
    addExpenseSource: () => { },
    removeExpenseSource: () => { }
});

export const useExpenseSourcesContext = () => useContext(ExpenseSourcesContext);