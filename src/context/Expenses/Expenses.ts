import { IExpensesContext } from "@typesrc/context/Expenses";
import { createContext, useContext } from "react";

export const ExpensesContext = createContext<IExpensesContext>({
    expenses: [],
    addExpense: () => { },
    removeExpense: () => { }
});

export const useExpensesContext = () => useContext(ExpensesContext);