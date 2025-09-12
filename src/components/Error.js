import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError()
    console.log(err);
    
  return (
    <div className="min-h-screen bg-[#1E1B18] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-7xl font-extrabold text-orange-500 mb-4">{err.status}</h1>
      <h2 className="text-2xl font-bold text-white mb-2">{err.data}</h2>
      <p className="text-gray-400 mb-6">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="bg-gradient-to-r from-orange-600 to-amber-500 text-white px-6 py-2 rounded-md font-semibold hover:from-orange-700 hover:to-amber-600 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
