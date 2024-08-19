import Navbar from "@components/Navbar";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Main() {

    return (
        <div className="flex">
            <Navbar />
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    )
}