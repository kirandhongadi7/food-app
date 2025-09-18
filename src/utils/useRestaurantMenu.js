import { useState,useEffect } from "react";
const useRestaurantMenu = (resId) =>{
    const [resInfo, setResInfo] = useState(null);
      useEffect(() => {
    fetchData();
  }, [resId]);

  const fetchData = async () => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}`
      );
      const json = await data.json();
      setResInfo(json);
    } catch (err) {
      console.error("Error fetching menu:", err);
    }
  };
    return resInfo;
}

export default useRestaurantMenu;