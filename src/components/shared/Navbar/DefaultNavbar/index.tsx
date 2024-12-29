import { useNavigationContext } from "@context/Navigation/Navigation";
import { MenuOpen } from "@mui/icons-material";
import { Box, IconButton, List, Tooltip, Typography } from "@mui/material";
import { motion, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import NavbarItem from "./NavbarItem";
import { INavigationItem } from "@typesrc/context/Navigation";

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

    const { items, navbarOpen, toggleNavbar, closeNavbar } = useNavigationContext();

    const [logoReferenceWidth, setLogoReferenceWidth] = useState(0);
    const [itemsToDisplay, setItemsToDisplay] = useState<INavigationItem[]>([]);
    const [fixedItems, setFixedItems] = useState<INavigationItem[]>([]);

    const logoRef = useRef<HTMLDivElement>(null);

    function getItems() {
        var itemsArray = items.filter(item => item.hidden !== 'desktop' && item.hidden !== 'all');
        return itemsArray;
    }

    function getItemsToDisplay() {
        return getItems().filter(item => !item.fixed);
    }
    
    function getFixedItems() {
        return getItems().filter(item => item.fixed === 'desktop' || item.fixed === 'all');
    }

    function handleNavbarEscape(event: KeyboardEvent) {
        if (event.key === "Escape") {
            closeNavbar();
        }
    }

    useEffect(() => {
        setLogoReferenceWidth(logoRef.current?.clientWidth || 84);
    }, []);

    useEffect(() => {
        if (navbarOpen) {
            document.addEventListener("keydown", handleNavbarEscape);
        }
        else {
            document.removeEventListener("keydown", handleNavbarEscape);
        }

        return () => {
            document.removeEventListener("keydown", handleNavbarEscape);
        }
    }, [navbarOpen]);

    useEffect(() => {
        setItemsToDisplay(getItemsToDisplay());
        setFixedItems(getFixedItems());
    }, [items]);

    return (
        <div
            className="relative"
            style={{
                width: `calc(${logoReferenceWidth}px + 2rem)`
            }}
        >
            <div
                className={`fixed inset-0 z-20 ${navbarOpen ? "block" : "hidden"}`}
                onClick={closeNavbar}
            />
            <MotionBox
                initial={navbarOpen ? "open" : "closed"}
                animate={navbarOpen ? "open" : "closed"}
                variants={navbarBoxVariants}
                transition={{
                    duration: 0.5,
                    bounce: 0
                }}
                className="flex flex-col h-screen p-4 absolute z-30"
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
                <List className="flex-1 overflow-y-auto overflow-x-hidden">
                    {itemsToDisplay.map((item) =>
                        <NavbarItem
                            key={item.path}
                            {...item}
                        />
                    )}
                </List>
                <div className="overflow-hidden">
                    {fixedItems.map((item) =>
                        <NavbarItem
                            key={item.title}
                            {...item}
                        />
                    )}
                </div>
            </MotionBox>
        </div>
    )
}