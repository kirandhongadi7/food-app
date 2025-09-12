import { useState } from "react";
import { Link } from "react-router-dom";
const Header =() =>{
  const[toggle,setToggle] = useState(1);
  const toggleLogin =()=>{
     return setToggle(prev => !prev);
  }
  return(
    <>
    <nav className="bg-gradient-to-r from-orange-700 via-orange-600 to-amber-500 flex justify-between items-center px-6 py-3 shadow-md rounded-b-2xl">

  {/* Logo */}
  <div className="flex items-center">
    <Link to = {"/"}><img
      className="w-[80px] h-[80px] rounded-lg shadow-md"
      src="https://cdn.truelancer.com/upload-full/785272-738fe171047121.5bb792800e8a3-1.jpg"
      alt="logo"
    /> </Link>
  </div>

  {/* Navigation Links */}
  <div>
    <ul className="flex gap-x-8 text-white font-semibold text-lg">
     <Link to={"/"}><li className="hover:text-gray-200 cursor-pointer transition">Home</li></Link>
      <Link to = {"/about"}><li className="hover:text-gray-200 cursor-pointer transition">About</li></Link>
      <Link to = {"/menu"}><li className="hover:text-gray-200 cursor-pointer transition">Menu</li></Link>
      <Link to={"/contact"}><li className="hover:text-gray-200 cursor-pointer transition">Contact</li></Link>
      <button className="hover:text-gray-200 cursor-pointer shadow-md transition-all duration-300 ease-in-out 
             active:scale-95" onClick={toggleLogin}>
        {toggle? "login":"logout"}</button>

    </ul>
  </div>
</nav>
    </>
  )
  
}
export default Header;