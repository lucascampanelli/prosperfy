import { IExpense, IExpensesProviderProps } from "@typesrc/context/Expenses";
import { ExpensesContext } from "./Expenses";
import { useState } from "react";
import { useAccountsContext } from "@context/Accounts/Accounts";

export default function ExpensesProvider({
    children
}: IExpensesProviderProps) {

    const { accounts } = useAccountsContext();

    const defaultExpenses: IExpense[] = [
        {
            id: 1,
            value: 100,
            account: accounts[0],
            date: new Date(),
            expenses: [
                {
                    id: 1,
                    value: 100,
                    account: accounts[0],
                    date: new Date(),
                    expenses: [],
                    file: {
                        id: 1,
                        name: "Comprovante de pagamento",
                        format: "pdf",
                        link: "https://example.com",
                        size: 1024,
                        uploadedAt: new Date()
                    },
                    source: {
                        id: 1,
                        name: "Extra",
                        categories: [
                            {
                                id: 1,
                                name: "Alimentação"
                            }
                        ]
                    }
                },
                {
                    id: 2,
                    value: 200,
                    account: accounts[1],
                    date: new Date(),
                    expenses: [],
                    file: {
                        id: 2,
                        name: "Comprovante de pagamento",
                        format: "pdf",
                        link: "https://example.com",
                        size: 1024,
                        uploadedAt: new Date()
                    },
                    source: {
                        id: 2,
                        name: "Nova Estação",
                        categories: [
                            {
                                id: 2,
                                name: "Medicamentos"
                            }
                        ]
                    }
                },
                {
                    id: 3,
                    value: 300,
                    account: accounts[2],
                    date: new Date(),
                    expenses: [],
                    file: {
                        id: 3,
                        name: "Comprovante de pagamento",
                        format: "pdf",
                        link: "https://example.com",
                        size: 1024,
                        uploadedAt: new Date()
                    },
                    source: {
                        id: 3,
                        name: "Dia",
                        categories: [
                            {
                                id: 3,
                                name: "Combustível"
                            }
                        ]
                    }
                }
            ],
            file: {
                id: 1,
                name: "Comprovante de pagamento",
                format: "pdf",
                link: "https://example.com",
                size: 1024,
                uploadedAt: new Date()
            },
            source: {
                id: 1,
                name: "Mercado",
                categories: [
                    {
                        id: 1,
                        name: "Alimentação"
                    }
                ]
            }
        },
        {
            id: 2,
            value: 200,
            account: accounts[1],
            date: new Date(),
            expenses: [],
            file: {
                id: 2,
                name: "Comprovante de pagamento",
                format: "pdf",
                link: "https://example.com",
                size: 1024,
                uploadedAt: new Date()
            },
            source: {
                id: 2,
                name: "Farmácia",
                categories: [
                    {
                        id: 2,
                        name: "Medicamentos"
                    }
                ]
            }
        },
        {
            id: 3,
            value: 300,
            account: accounts[2],
            date: new Date(),
            expenses: [],
            file: {
                id: 3,
                name: "Comprovante de pagamento",
                format: "pdf",
                link: "https://example.com",
                size: 1024,
                uploadedAt: new Date()
            },
            source: {
                id: 3,
                name: "Posto de gasolina",
                categories: [
                    {
                        id: 3,
                        name: "Combustível"
                    }
                ]
            }
        }
    ]

    const [expenses, setExpenses] = useState<IExpense[]>(defaultExpenses);

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