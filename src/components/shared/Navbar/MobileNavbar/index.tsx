import { useNavigationContext } from "@context/Navigation/Navigation";
import { BottomNavigation, BottomNavigationAction, styled } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const CustomBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    justifyContent: "space-around",
    padding: "0.6rem",
    height: "4.75rem"
}))

const CustomBottomNavigationAction = styled(BottomNavigationAction)(({ theme }) => ({
    borderRadius: 8,
    maxWidth: 60,
    minWidth: 60,
    transition: "background-color 0.25s",
    "&::before": {
        content: '""',
        position: "absolute",
        left: "50%",
        right: "50%",
        bottom: 4,
        height: 4,
        backgroundColor: theme.palette.primary.main,
        borderRadius: 40,
        transition: "all 0.25s"
    },
    "&.Mui-selected": {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.contrastText,
        "&::before": {
            content: '""',
            position: "absolute",
            left: 14,
            right: 14,
            bottom: 4,
            height: 4,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 40
        },
    }
}))

export default function MobileNavbar() {

    const { items } = useNavigationContext();

    const [value, setValue] = useState(0);

    return (
        <CustomBottomNavigation
            value={value}
            onChange={(_, newValue) => setValue(newValue)}
        >
            {items.map((item, index) => (
                <CustomBottomNavigationAction
                    key={index}
                    icon={value === index ? item.activeIcon : item.icon}
                    component={Link}
                    to={item.path}
                />
            ))}
        </CustomBottomNavigation>
    )
}