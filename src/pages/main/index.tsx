import Navbar from "@components/shared/Navbar";
import MobileNavbar from "@components/shared/Navbar/MobileNavbar";
import Header from "@components/shared/Header";
import { Outlet } from "react-router-dom";

export default function Main() {

    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="hidden md:block">
                <Navbar />
            </div>
            <div className="flex-1 p-8 pb-20 md:pb-8 overflow-auto">
                <Header />
                <div className="pt-8">
                    <Outlet />
                </div>
                <div className="fixed left-0 right-0 bottom-0 md:hidden">
                    <MobileNavbar />
                </div>
            </div>
        </div>
    )
}