const RestaurantCard =({resData}) =>{
  // const{resName,cuisines} = props
  return(
    <>
     <div className="res-card cursor-pointer w-[220px] h-[340px] border rounded-xl shadow-md m-3 bg-[#fcf8ebeb] hover:shadow-xl context-box transition">
  {/* Image */}
  <div className="p-2">
    <img
      className="w-full h-[140px] object-cover rounded-lg"
      src={
            resData.cloudinaryImageId
              ? `https://media-assets.swiggy.com/swiggy/image/upload/${resData.cloudinaryImageId}`
              : "https://via.placeholder.com/220x140"
          }
      alt="resData.name"
    />
  </div>

  {/* Content */}
  <div className="px-3 pb-3">
    <h1 className="text-lg font-semibold text-gray-800">{resData.name}</h1>
    <h3 className="text-sm text-gray-600 break-words line-clamp-2 mt-1">
      <span className="font-medium">Cuisines:</span> {resData.cuisines.join(",")}
    </h3>
    <h3 className="text-sm mt-2 text-yellow-600 font-semibold">⭐{resData.avgRating}</h3>
    <p className="text-sm text-gray-500 mt-1">⏱️{resData.sla.deliveryTime}</p>
  </div>
</div>

    </>
  )
}

export default RestaurantCard;