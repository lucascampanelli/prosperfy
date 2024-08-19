import { useNavigationContext } from "@context/Navigation/Navigation";
import { Box, IconButton, List, Typography } from "@mui/material";
import NavbarItem from "./NavbarItem";
import { AccountBalanceWalletRounded, Menu } from "@mui/icons-material";
import { motion, Variants } from "framer-motion";

const navbarBoxVariants: Variants = {
    closed: {
        width: "6rem"
    },
    open: {
        width: "18rem"
    }
};

const MotionBox = motion(Box);

export default function Navbar() {

    const { items, navbarOpen, toggleNavbar } = useNavigationContext();

    return (
        <MotionBox
            initial={navbarOpen ? "open" : "closed"}
            animate={navbarOpen ? "open" : "closed"}
            variants={navbarBoxVariants}
            transition={{
                duration: 0.5,
                bounce: 0
            }}
            className="p-4 overflow-hidden"
        >
            <IconButton
                size="large"
                onClick={toggleNavbar}
            >
                <AccountBalanceWalletRounded fontSize="large" />
            </IconButton>
            <div className="flex flex-row justify-between items-center mt-4">
                {navbarOpen &&
                    <Typography variant="h4">
                        Prosperify
                    </Typography>
                }
                <IconButton
                    size="large"
                    onClick={toggleNavbar}
                >
                    <Menu fontSize="large" />
                </IconButton>
            </div>
            <List className="overflow-y-auto overfloe-x-hidden">
                {items.map((item) =>
                    <NavbarItem
                        key={item.path}
                        navbarOpen={navbarOpen}
                        {...item}
                    />
                )}
            </List>
        </MotionBox>
    )
}