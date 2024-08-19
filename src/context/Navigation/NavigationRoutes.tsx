import { AccountBalanceWalletOutlined, AccountBalanceWalletRounded, HomeOutlined, HomeRounded, PaidOutlined, PaidRounded, PaymentsOutlined, PaymentsRounded } from "@mui/icons-material";
import { INavigationItem } from "@typesrc/context/Navigation";

export const defaultRoutes: INavigationItem[] = [
    {
        title: "Início",
        path: "/",
        icon: <HomeOutlined />,
        activeIcon: <HomeRounded />
    },
    {
        title: "Despesas",
        path: "/expenses",
        icon: <PaymentsOutlined />,
        activeIcon: <PaymentsRounded />
    },
    {
        title: "Ganhos",
        path: "/earnings",
        icon: <PaidOutlined />,
        activeIcon: <PaidRounded />
    },
    {
        title: "Contas",
        path: "/accounts",
        icon: <AccountBalanceWalletOutlined />,
        activeIcon: <AccountBalanceWalletRounded />
    }
];