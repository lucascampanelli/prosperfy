import Navbar from "@components/Navbar";
import MobileNavbar from "@components/Navbar/MobileNavbar";
import { Outlet } from "react-router-dom";

export default function Main() {

    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="hidden md:block">
                <Navbar />
            </div>
            <div className="flex-1">
                <Outlet />
            </div>
            <div className="md:hidden">
                <MobileNavbar />
            </div>
        </div>
    )
}