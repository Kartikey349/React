import { useEffect, useState } from "react"
import { MENU_URL } from "./constants";

export const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(()=> {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_URL + resId);

        const json = await data.json();

        setResInfo(json.data);
    }

    return resInfo;
}
