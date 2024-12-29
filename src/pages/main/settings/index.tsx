import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Settings() {

    const { pathname } = useLocation();

    const [value, setValue] = useState(pathname);

    return (
        <div>
            <Tabs
                value={value}
                onChange={(_, newValue) => setValue(newValue)}
                TabIndicatorProps={{
                    children: <div />
                }}
            >
                <Tab
                    label="Geral"
                    value="/settings"
                    component={Link}
                    to="/settings"
                />
                <Tab
                    label="Grupo"
                    value="/settings/group"
                    component={Link}
                    to="/settings/group"
                />
            </Tabs>
            <Outlet />
        </div>
    )
}