import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import theme from "../theme";
import GroupsProvider from "./Groups/GroupsProvider";
import NavigationProvider from "./Navigation/NavigationProvider";
import ToastsProvider from "./Toast/ToastsProvider";
import UsersProvider from "./Users/UsersProvider";
import FilesProvider from "./Files/FilesProvider";
import EarningSourcesProvider from "./EarningSources/EarningSourcesProvider";
import ExpenseSourcesProvider from "./ExpenseSources/ExpenseSourcesProvider";
import EarningsProvider from "./Earnings/EarningsProvider";
import ExpensesProvider from "./Expenses/ExpensesProvider";
import { IContextProvidersProps } from "@typesrc/context";
import AccountsProvider from "./Accounts/AccountsProvider";

export default function ContextProviders({
    children
}: IContextProvidersProps) {

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <NavigationProvider>
                    <ToastsProvider>
                        <GroupsProvider>
                            <UsersProvider>
                                <AccountsProvider>
                                    <FilesProvider>
                                        <EarningSourcesProvider>
                                            <ExpenseSourcesProvider>
                                                <EarningsProvider>
                                                    <ExpensesProvider>
                                                        {children}
                                                    </ExpensesProvider>
                                                </EarningsProvider>
                                            </ExpenseSourcesProvider>
                                        </EarningSourcesProvider>
                                    </FilesProvider>
                                </AccountsProvider>
                            </UsersProvider>
                        </GroupsProvider>
                    </ToastsProvider>
                </NavigationProvider>
            </ThemeProvider>
        </StyledEngineProvider>
    )
}