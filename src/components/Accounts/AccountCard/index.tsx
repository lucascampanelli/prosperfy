import { Card, CardContent, Typography } from "@mui/material";
import { IAccountCardProps } from "@typesrc/components/Accounts/AccountCard";
import moment from "moment";

export default function AccountCard({
    account
}: IAccountCardProps) {

    return (
        <Card
            className="aspect-video"
            sx={{
                background: account.color ?? 'background.default',
                color: theme => theme.palette.getContrastText(account.color ?? 'background.default'),
            }}
        >
            <CardContent
                className="flex flex-col h-full bg-transparent"
            >
                <div className="h-full">
                    <Typography className="text-xl font-medium">
                        {account.name}
                    </Typography>
                    <Typography className="text-3xl font-semibold">
                        {
                            Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(account.balance)
                        }
                    </Typography>
                </div>
                <Typography className="text-xs">
                    Atualizado em:
                </Typography>
                <Typography className="text-md">
                    {moment(account.updatedAt).format("DD/MM/YYYY [às] HH:mm")}
                </Typography>
            </CardContent>
        </Card>
    )
}