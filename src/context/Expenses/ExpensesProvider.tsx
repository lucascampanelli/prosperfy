import { IExpense, IExpensesProviderProps } from "@typesrc/context/Expenses";
import { ExpensesContext } from "./Expenses";
import { useState } from "react";

export default function ExpensesProvider({
    children
}: IExpensesProviderProps) {

    const [expenses, setExpenses] = useState<IExpense[]>([]);

    return (
        <ExpensesContext.Provider value={{
            expenses,
            addExpense: () => { },
            removeExpense: () => { }
        }}>
            {children}
        </ExpensesContext.Provider>
    );
}