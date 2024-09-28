import { ListItemIcon, ListItemText } from "@mui/material";
import { INavbarItemProps } from "@typesrc/components/shared/Navbar";
import { Link, useLocation } from "react-router-dom";
import { CustomNavbarListItem } from "..";

export default function NavbarLinkItem({
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
    )
}