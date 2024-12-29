import { AccountBalanceWalletOutlined, AccountBalanceWalletRounded, FileCopyOutlined, FileCopyRounded, HomeOutlined, HomeRounded, Menu, MenuOutlined, PaidOutlined, PaidRounded, PaymentsOutlined, PaymentsRounded, Settings, SettingsOutlined } from "@mui/icons-material";
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
    },
    {
        title: "Arquivos",
        path: "/files",
        icon: <FileCopyOutlined />,
        activeIcon: <FileCopyRounded />
    },
    {
        title: "Configurações",
        path: "/settings",
        icon: <SettingsOutlined />,
        activeIcon: <Settings />,
        fixed: 'desktop',
    },
    {
        title: "Menu",
        path: "/menu",
        icon: <Menu />,
        activeIcon: <MenuOutlined />,
        fixed: 'mobile',
        hidden: 'desktop'
    }
];