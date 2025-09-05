
const Header =() =>{
  return(
    <>
    <nav className="bg-gradient-to-r from-orange-700 via-orange-600 to-amber-500 flex justify-between items-center px-6 py-3 shadow-md rounded-b-2xl">

  {/* Logo */}
  <div className="flex items-center">
    <img
      className="w-[80px] h-[80px] rounded-lg shadow-md"
      src="https://cdn.truelancer.com/upload-full/785272-738fe171047121.5bb792800e8a3-1.jpg"
      alt="logo"
    />
  </div>

  {/* Navigation Links */}
  <div>
    <ul className="flex gap-x-8 text-white font-semibold text-lg">
      <li className="hover:text-gray-200 cursor-pointer transition">Home</li>
      <li className="hover:text-gray-200 cursor-pointer transition">About</li>
      <li className="hover:text-gray-200 cursor-pointer transition">Menu</li>
      <li className="hover:text-gray-200 cursor-pointer transition">Contact</li>
    </ul>
  </div>
</nav>
    </>
  )
  
}
export default Header;