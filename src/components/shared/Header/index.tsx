import { useNavigationContext } from "@context/Navigation/Navigation"
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function Header() {

    const { getActiveItem } = useNavigationContext();
    const { pathname } = useLocation();

    return (
        <Box
            component="header"
            className="sticky top-0 p-4 pt-8 md:px-8 md:pt-8 md:pb-4"
            bgcolor="background.default"
        >
            <h1 className="text-4xl font-semibold">
                {getActiveItem(pathname)?.title}
            </h1>
        </Box>
    )
}