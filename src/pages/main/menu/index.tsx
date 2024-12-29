import NavbarItem from "@components/shared/Navbar/DefaultNavbar/NavbarItem";
import { useNavigationContext } from "@context/Navigation/Navigation";
import { List } from "@mui/material";
import { INavigationItem } from "@typesrc/context/Navigation";
import { useEffect, useState } from "react";

export default function Menu() {

    const { items } = useNavigationContext();

    const [itemsToShow, setItemsToShow] = useState<INavigationItem[]>([]);

    function getItemsToShow() {
        var itemsArray = items.filter(item => item.hidden !== 'mobile' && item.hidden !== 'all');
        itemsArray = itemsArray.filter(item => item.path !== '/menu');
        return itemsArray;
    }

    useEffect(() => {
        setItemsToShow(getItemsToShow());
    }, [items]);

    return (
        <List className="flex-1 overflow-y-auto overflow-x-hidden">
            {itemsToShow.map((item) =>
                <NavbarItem
                    key={item.path}
                    {...item}
                />
            )}
        </List>
    )
}