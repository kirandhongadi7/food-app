import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [topBtn, setTopBtn] = useState(true);
  const [temprestaurants, setTempRestaurants] = useState([]);
  const [searchText,setSearchText] = useState("")
  const [noresult, setNoresult] = useState(false)
  const [filtering,setFiltering] = useState([])
  

  useEffect(() => {
    restList();
    
    
  }, []);

  const restList = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    

    setRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
    );
    setTempRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || {}
    );
    setFiltering(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
  };
  //Toggle logic to show {top rated restorant} and {show all restorants}
  // First create state then onClich change the value {!prev}
  const topRatedRest = () => {
    setTopBtn((prev) => {
      if (prev) {
        setRestaurants(
          filtering.filter((rest) => rest.info.avgRating >= 4.4)
        );
      } else {
        setRestaurants(temprestaurants);
      }
      return !prev;
    });
  };

 
  //  returing the body
  if (!restaurants || restaurants.length === 0) {
  return <Shimmer />;
}


   return(
    <>
      <div className="mt-2  m-7">
        {/*Search feature  it will modify everytime when we write anyting in search bar*/}
        
        <div className="flex justify-end mb-4">
          <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-lg shadow-md">
            <input
              type="text"
              placeholder="Search restaurants..."
              className="outline-none px-2 py-1 rounded-md border border-gray-300 focus:ring-2 focus:ring-orange-500"
              value={searchText}
              onChange={(e) =>{
                setSearchText(e.target.value)
              }}
    
              
            />
            
            <button className="bg-gradient-to-r from-orange-600 to-amber-500 text-white px-4 py-1.5 rounded-md hover:from-orange-700 hover:to-amber-600 transition"
              onClick={() =>{
                console.log(searchText);
                let filterList = restaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                setRestaurants(filterList)
                // if(filterList.length === 0) {
                //   setNoresult(true)
                // }
                // else{
                //   setNoresult(false)
                //   setRestaurants(filterList)
                  
                // }
              }}
            >
              Search
            </button>
             <button onClick={()=> setRestaurants(temprestaurants)} className="bg-gradient-to-r from-orange-600 to-amber-500 text-white px-4 py-1.5 rounded-md hover:from-orange-700 hover:to-amber-600 transition"> Back </button>

          </div>
          
        </div>
        {/* {noresult && (
  <h1 className="text-red-500 text-lg font-semibold mt-2 text-center">
    No such items
    {setRestaurants(temprestaurants)}
  </h1>
        )} */}

       
       
        <button
          onClick={topRatedRest}
          className="bg-gradient-to-r  from-orange-700 via-orange-600 to-amber-500 py-1.5 px-2 rounded-md"
        >
          {topBtn ? "Top rated Restorant" : "Show all restorant"}
        </button>
        
        <div className="res-container flex flex-wrap">
  {restaurants.map((res) => (
    <RestaurantCard key={res.info.id} resData={res.info} />
  ))}
</div>

      </div>
      
      
    </>
  );
};
export default Body;
