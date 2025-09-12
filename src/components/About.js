const About = () => {
  return (
    <div className="min-h-screen bg-[#1E1B18] flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold text-orange-500 mb-6">
          About Us
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Welcome to <span className="text-orange-400 font-semibold">FoodieApp</span> – 
          your one-stop destination to explore the best restaurants around you. 
          We bring delicious meals closer to you with a smooth, fast, and 
          delightful experience. Whether you're craving street food or fine dining, 
          we’ve got it covered.
        </p>
        <p className="text-gray-400 text-md leading-relaxed">
          Our mission is simple – <span className="italic">to connect people with great food.</span>  
          From top-rated restaurants to hidden gems, we make discovering food easy 
          and fun. Enjoy personalized recommendations, quick ordering, and the best 
          offers – all in one place.
        </p>

        {/* Highlighted Info */}
        <div className="mt-10 grid md:grid-cols-3 gap-6 text-white">
          <div className="bg-orange-600 rounded-xl p-5 shadow-md">
            <h2 className="text-xl font-bold">500+</h2>
            <p className="text-sm">Restaurants Listed</p>
          </div>
          <div className="bg-orange-600 rounded-xl p-5 shadow-md">
            <h2 className="text-xl font-bold">10K+</h2>
            <p className="text-sm">Happy Customers</p>
          </div>
          <div className="bg-orange-600 rounded-xl p-5 shadow-md">
            <h2 className="text-xl font-bold">24/7</h2>
            <p className="text-sm">Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
