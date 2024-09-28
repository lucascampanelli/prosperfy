import { MoreVert } from "@mui/icons-material";
import { Card, CardActionArea, CardContent, IconButton, Tooltip, Typography, useTheme } from "@mui/material";
import { IAccountCardProps } from "@typesrc/components/Accounts/AccountCard";
import moment from "moment";

export default function AccountCard({
    account
}: IAccountCardProps) {

    const theme = useTheme();

    return (
        <Card
            className="aspect-video"
            sx={{
                background: account.color ?? 'background.default',
                color: theme => theme.palette.getContrastText(account.color ?? 'background.default'),
            }}
        >
            <CardActionArea className="h-full">
                <CardContent className="relative flex flex-col h-full bg-transparent">
                    <Tooltip
                        arrow
                        title="Mais opções"
                        placement="left"
                    >
                        <IconButton
                            className="absolute top-4 right-4"
                            size="large"
                        >
                            <MoreVert
                                fontSize="medium"
                                htmlColor={theme.palette.getContrastText(account.color ?? "#000000")}
                            />
                        </IconButton>
                    </Tooltip>
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
            </CardActionArea>
        </Card>
    )
}