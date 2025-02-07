import { useNavigationContext } from "@context/Navigation/Navigation";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import HeaderUser from "./HeaderUser";

export default function Header() {

    const { getActiveItem } = useNavigationContext();
    const { pathname } = useLocation();

    return (
        <Box
            component="header"
            className="flex justify-between sticky z-10 top-0 p-4 pt-8 md:px-8 md:pt-8 md:pb-4"
            bgcolor="background.default"
        >
            <h1 className="text-4xl font-semibold">
                {getActiveItem(pathname)?.title}
            </h1>
            <HeaderUser />
        </Box>
    )
}