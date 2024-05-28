import { IExpenseSource, IExpenseSourcesProviderProps } from "@typesrc/context/ExpenseSources";
import { useState } from "react";
import { ExpenseSourcesContext } from "./ExpenseSources";

export default function ExpenseSourcesProvider({
    children
}: IExpenseSourcesProviderProps) {

    const [expenseSources, setExpenseSources] = useState<IExpenseSource[]>([]);

    return (
        <ExpenseSourcesContext.Provider value={{
            expenseSources,
            addExpenseSource: () => { },
            removeExpenseSource: () => { }
        }}>
            {children}
        </ExpenseSourcesContext.Provider>
    );
}