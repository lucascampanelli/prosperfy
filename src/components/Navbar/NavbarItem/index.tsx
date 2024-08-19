import { ListItemButton, ListItemIcon, ListItemText, styled } from "@mui/material";
import { ICustomNavbarListItemProps, INavbarItemProps } from "@typesrc/components/Navbar";
import { Link, useLocation } from "react-router-dom";

const CustomNavbarListItem = styled(ListItemButton, {
    shouldForwardProp: (prop) => prop !== "navbarOpen"
})<ICustomNavbarListItemProps>(({ theme, navbarOpen }) => ({
    height: 48,
    // width: navbarOpen ? "100%" : "fit-content",
    marginBottom: theme.spacing(1),
    borderRadius: 8,
    // "& .MuiListItemIcon-root": {
    //     minWidth: navbarOpen ? 48 : 0
    // },
    "&.Mui-selected": {
        "&::before": {
            content: '""',
            position: "absolute",
            top: 14,
            left: 4,
            bottom: 14,
            width: 4,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 40
        },
        "& .MuiListItemIcon-root": {
            color: theme.palette.primary.main,
            // minWidth: navbarOpen ? 48 : 0
        }
    }
}));

export default function NavbarItem({
    title,
    path,
    icon,
    activeIcon,
    navbarOpen
}: INavbarItemProps) {

    const { pathname } = useLocation();

    function isPathActive() {
        return pathname === path;
    }

    return (
        <CustomNavbarListItem
            component={Link}
            to={path}
            selected={isPathActive()}
            navbarOpen={navbarOpen}
        >
            <ListItemIcon>
                {isPathActive() ? activeIcon : icon}
            </ListItemIcon>
            <ListItemText>
                {title}
            </ListItemText>
        </CustomNavbarListItem>
    );
}