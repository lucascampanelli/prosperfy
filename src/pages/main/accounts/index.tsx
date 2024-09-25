import AccountCard from "@components/Accounts/AccountCard";
import { useAccountsContext } from "@context/Accounts/Accounts";
import { Grid } from "@mui/material";

export default function Accounts() {

    const { accounts } = useAccountsContext();

    return (
        <div>
            <Grid
                container
                spacing={3}
            >
                {accounts.map(account => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        lg={4}
                        xl={2}
                    >
                        <AccountCard key={account.id} account={account} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}