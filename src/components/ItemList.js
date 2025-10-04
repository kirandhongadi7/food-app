import React from "react";

const ItemList = ({ items }) => {
  return (
    <div className="text-white p-4">
      <ul className="space-y-4">
        {items.map((item) => {
          const info = item?.card?.info;

          return (
            <li
              key={info?.id}
              className="flex justify-between items-center bg-gradient-to-r from-[#1a1a1a] via-[#222] to-[#1a1a1a] rounded-xl p-4 shadow-md hover:shadow-orange-500/20 transition-all duration-300"
            >
              <div className="flex flex-col">
                <h3 className="text-lg font-bold text-orange-400">{info?.name}</h3>
                <p className="text-sm text-gray-300 mt-1">
                  ₹{info?.defaultPrice / 100 || info?.price / 100}
                </p>
                {info?.description && (
                  <p className="text-sm text-gray-400 mt-2 line-clamp-2">
                    {info?.description}
                  </p>
                )}
              </div>

              <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-transform transform hover:scale-105">
                Add +
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemList;
