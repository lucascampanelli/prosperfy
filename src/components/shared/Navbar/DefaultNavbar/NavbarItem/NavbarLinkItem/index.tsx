import { ListItemIcon, ListItemText } from "@mui/material";
import { INavbarItemProps } from "@typesrc/components/shared/Navbar";
import { Link, useLocation } from "react-router-dom";
import { CustomNavbarListItem } from "..";
import { pathMatches } from "util/path";

export default function NavbarLinkItem({
    title,
    path,
    icon,
    activeIcon
}: INavbarItemProps) {

    const { pathname } = useLocation();

    return (
        <CustomNavbarListItem
            component={Link}
            to={path}
            selected={pathMatches(path, pathname)}
        >
            <ListItemIcon>
                {pathMatches(path, pathname) ? activeIcon : icon}
            </ListItemIcon>
            <ListItemText>
                {title}
            </ListItemText>
        </CustomNavbarListItem>
    )
}