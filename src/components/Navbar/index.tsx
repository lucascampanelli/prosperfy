import { useNavigationContext } from "@context/Navigation/Navigation";
import { MenuOpen } from "@mui/icons-material";
import { Box, IconButton, List, Tooltip, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import NavbarItem from "./NavbarItem";

const navbarBoxVariants: Variants = {
    closed: {
        width: "100%"
    },
    open: {
        width: "280%"
    }
};

const MotionBox = motion(Box);

export default function Navbar() {

    const { items, navbarOpen, toggleNavbar } = useNavigationContext();

    const [logoReferenceWidth, setLogoReferenceWidth] = useState(0);

    const logoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setLogoReferenceWidth(logoRef.current?.clientWidth || 84);
    }, []);

    return (
        <div
            className="relative"
            style={{
                width: `calc(${logoReferenceWidth}px + 2rem)`
            }}
        >
            <MotionBox
                initial={navbarOpen ? "open" : "closed"}
                animate={navbarOpen ? "open" : "closed"}
                variants={navbarBoxVariants}
                transition={{
                    duration: 0.5,
                    bounce: 0
                }}
                className="flex flex-col h-screen p-4 absolute z-10"
                bgcolor="background.paper"
            >
                <div className="">
                    <IconButton
                        size="large"
                        onClick={toggleNavbar}
                    >
                        <img
                            src="/vite.svg"
                            alt="Logo"
                            width={30}
                            height={30}
                        />
                    </IconButton>
                    <div className="flex items-center mt-4">
                        <div className="w-full overflow-hidden">
                            <Typography className="w-auto" variant="h4">
                                Prosperify
                            </Typography>
                        </div>
                        <Tooltip
                            title={navbarOpen ? "Fechar menu" : "Abrir menu"}
                            arrow
                            placement="right"
                        >
                            <div
                                className="w-fit"
                                ref={logoRef}
                            >
                                <IconButton
                                    size="large"
                                    onClick={toggleNavbar}
                                    className="w-fit"
                                    style={{
                                        transform: `rotate(${navbarOpen ? 0 : 180}deg)`
                                    }}
                                >
                                    <MenuOpen fontSize="large" />
                                </IconButton>
                            </div>
                        </Tooltip>
                    </div>
                </div>
                <List className="overflow-y-auto overflow-x-hidden h-full">
                    {items.map((item) =>
                        <NavbarItem
                            key={item.path}
                            {...item}
                        />
                    )}
                </List>
            </MotionBox>
        </div>
    )
}