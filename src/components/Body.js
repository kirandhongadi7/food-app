import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

const Body =() =>{
  const[restaurants,setRestaurants] = useState([]);
  const[topBtn,setTopBtn] = useState(true)
  const[temprestaurants,setTempRestaurants] = useState([]);


  useEffect(() =>{
    restList()
  },[])

  const restList = async () =>{
  const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING")
  const json = await data.json();
   console.log(json);

  setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  setTempRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

   
}
//Toggle logic to show {top rated restorant} and {show all restorants}
// First create state then onClich change the value {!prev}
const topRatedRest =() =>{
  setTopBtn(prev =>{
    if (prev){
      setRestaurants(restaurants.filter(rest => rest.info.avgRating >= 4.5))
    }
    else{
      setRestaurants(temprestaurants)
    }
    return !prev
  } );
}

  return(
    <>
    <div className="mt-2  m-7">body
       <div>serach</div> 
       <button onClick={topRatedRest} className="bg-gradient-to-r  from-orange-700 via-orange-600 to-amber-500 py-1.5 px-2 rounded-md">
         {topBtn ? "Top rated Restorant": "Show all restorant"}
        </button>
       <div className="res-container flex flex-wrap">
        {restaurants.map((res) =>(
          <RestaurantCard key={res.info.id} resData ={res.info}/>
        ))}
       </div>
    </div>
   

    </>
  )
}
export default Body;