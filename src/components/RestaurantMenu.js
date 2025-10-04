import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  // Created custom Hooks
  const resInfo = useRestaurantMenu(resId);
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const data = await fetch(
  //       `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}`
  //     );
  //     const json = await data.json();
  //     setResInfo(json);
  //   } catch (err) {
  //     console.error("Error fetching menu:", err);
  //   }
  // };

  // Show shimmer until API loads
  if (!resInfo?.data) {
    return <Shimmer />;
  }

  // Restaurant details
  const {
    name,
    cuisines,
    areaName,
    costForTwoMessage,
    avgRating,
    city,
    cloudinaryImageId,
  } = resInfo?.data?.cards[2]?.card?.card?.info || {};

  // Extract menu items
  const itemCards =
    resInfo?.data?.cards
      ?.find((card) => card.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR
      ?.cards?.flatMap((c) => c.card?.card?.itemCards || []) || [];

      console.log(resInfo?.data?.cards
      ?.find((card) => card.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR
      ?.cards);

      const categories = resInfo?.data?.cards
      ?.find((card) => card.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR
      ?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") || [];

      console.log(categories);
      
    
      

  return (
    <div className="text-white px-6 py-8 min-h-screen bg-gradient-to-br from-[#1f1f1f] via-[#2a2a2a] to-[#1a1a1a]">
      {/* Restaurant Info */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg mb-8">
        <img
          className="w-[220px] h-[180px] object-cover rounded-xl shadow-lg"
          src={
            cloudinaryImageId
              ? `https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`
              : "https://via.placeholder.com/220x140"
          }
          alt={name}
        />
        <div className="flex-1">
          <h1 className="text-3xl font-extrabold">{name}</h1>
          <p className="text-gray-300 mt-1">{cuisines?.join(", ")}</p>
          <p className="text-gray-400">{areaName}, {city}</p>
          <div className="flex gap-6 mt-3">
            <span className="bg-green-600 px-3 py-1 rounded-full text-sm font-semibold">
              ⭐ {avgRating || "N/A"}
            </span>
            <span className="bg-orange-500/80 px-3 py-1 rounded-full text-sm font-semibold">
              {costForTwoMessage}
            </span>
          </div>
        </div>
      </div>
            {/* according */}
            <div>
                 {console.log(categories)
                 }
                {categories.map((item,i) =>   <div key={i}><RestaurantCategory  item ={item}/> </div>)}
                 
            </div>
      {/* Menu Section */}
      {/* <h2 className="text-2xl font-bold mb-4 border-b border-gray-600 pb-2">🍴 Menu</h2>
      <ul className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
        {itemCards.length > 0 ? (
          itemCards.map((item, i) => (
            <li
              key={i}
              className="bg-white/10 hover:bg-white/20 transition-colors duration-200 p-4 rounded-xl flex justify-between items-center shadow-sm"
            >
              <span className="font-medium">{item.card.info.name}</span>
              <span className="text-orange-400 font-semibold">
                ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
              </span>
            </li>
          ))
        ) : (
          <p className="text-gray-400">Menu not available</p>
        )}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
