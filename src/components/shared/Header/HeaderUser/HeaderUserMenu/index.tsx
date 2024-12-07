import { Divider, Menu, MenuItem } from "@mui/material";
import { IHeaderUserMenuProps } from "@typesrc/components/shared/Header";

export default function HeaderUserMenu({
    anchorEl,
    open,
    onClose
}: IHeaderUserMenuProps) {

    return (
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={onClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            slotProps={{
                paper: {
                    sx: {
                        width: 260
                    }
                }
            }}
        >
            <MenuItem onClick={onClose}>Nicholas Campanelli</MenuItem>
            <MenuItem onClick={onClose}>Grupo</MenuItem>
            <Divider />
            <MenuItem onClick={onClose}>Sair</MenuItem>
        </Menu>
    );
}