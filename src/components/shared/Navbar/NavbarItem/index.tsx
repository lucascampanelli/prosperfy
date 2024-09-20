import { ListItemButton, ListItemIcon, ListItemText, styled } from "@mui/material";
import { INavbarItemProps } from "@typesrc/components/shared/Navbar";
import { Link, useLocation } from "react-router-dom";

const CustomNavbarListItem = styled(ListItemButton)(({ theme }) => ({
    height: 48,
    marginBottom: theme.spacing(1),
    borderRadius: 8,
    transition: "background-color 0.25s",
    "&::before": {
        content: '""',
        position: "absolute",
        top: "50%",
        left: 4,
        bottom: "50%",
        width: 4,
        backgroundColor: theme.palette.primary.main,
        borderRadius: 40,
        transition: "all 0.25s"
    },
    "&.Mui-selected": {
        "&::before": {
            content: '""',
            position: "absolute",
            top: "30%",
            left: 4,
            bottom: "30%",
            width: 4,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 40
        },
        "& .MuiListItemIcon-root": {
            color: theme.palette.primary.main
        },
        "& .MuiListItemText-primary": {
            color: theme.palette.primary.main
        }
    },
    "& .MuiListItemIcon-root": {
        minWidth: 44,
    }
}));

export default function NavbarItem({
    title,
    path,
    icon,
    activeIcon
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