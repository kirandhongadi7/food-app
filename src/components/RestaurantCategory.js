import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ item ,showItems,setShowIndex}) => {
//  const [showIndex,setShowItems] = useState(false)
  const handleClick = () =>{
//       setShowItems(!showItems)
           setShowIndex()
  }
  return (
    <div className="w-6/12 m-auto my-4">
      <div className="flex justify-between items-center py-3 px-4 shadow-md font-semibold rounded-md bg-white/10 text-white cursor-pointer"
      onClick={handleClick}>
        <p>{item?.card?.card?.title} ({item?.card?.card?.itemCards.length})</p>
        <p>▼</p>
      </div>
      {/* {acortind} */}
      
      
     {showItems && <ItemList items={item?.card?.card?.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
