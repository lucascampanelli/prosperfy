import { useNavigationContext } from "@context/Navigation/Navigation"
import { useLocation } from "react-router-dom";

export default function Header() {

    const { getActiveItem } = useNavigationContext();
    const { pathname } = useLocation();

    return (
        <header className="mb-4">
            <h1 className="text-4xl font-semibold">
                {getActiveItem(pathname)?.title}
            </h1>
        </header>
    )
}