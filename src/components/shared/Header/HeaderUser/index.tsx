import { AccountCircleOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";
import HeaderUserMenu from "./HeaderUserMenu";

export default function HeaderUser() {

    const [anchor, setAnchor] = useState<null | HTMLElement>(null);

    function openMenu(event: React.MouseEvent<HTMLButtonElement>) {
        setAnchor(event.currentTarget);
    }

    function closeMenu() {
        setAnchor(null);
    }

    return (
        <div>
            <IconButton
                sx={{ padding: 0 }}
                onClick={openMenu}
            >
                <AccountCircleOutlined fontSize="large" />
            </IconButton>
            <HeaderUserMenu
                anchorEl={anchor}
                open={Boolean(anchor)}
                onClose={closeMenu}
            />
        </div>
    )
}