const Menu = () => {
  return (
    <div className="min-h-screen bg-[#1E1B18] flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-extrabold text-orange-500 mb-8">Our Menu</h1>
        <p className="text-gray-300 text-lg mb-10">
          Explore our delicious range of dishes crafted with love and fresh ingredients.  
          From appetizers to desserts, we’ve got something for everyone.
        </p>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-orange-600 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-white mb-2">🍕 Pizza</h2>
            <p className="text-gray-200 text-sm">
              Freshly baked pizzas with cheesy goodness and tasty toppings.
            </p>
          </div>
          <div className="bg-orange-600 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-white mb-2">🍔 Burgers</h2>
            <p className="text-gray-200 text-sm">
              Juicy patties layered with crispy veggies & sauces.
            </p>
          </div>
          <div className="bg-orange-600 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-white mb-2">🥗 Salads</h2>
            <p className="text-gray-200 text-sm">
              Healthy & refreshing salads made with seasonal ingredients.
            </p>
          </div>
          <div className="bg-orange-600 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-white mb-2">🍝 Pasta</h2>
            <p className="text-gray-200 text-sm">
              Authentic pasta with creamy & tangy sauces.
            </p>
          </div>
          <div className="bg-orange-600 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-white mb-2">🍰 Desserts</h2>
            <p className="text-gray-200 text-sm">
              Sweet treats to make your meal complete.
            </p>
          </div>
          <div className="bg-orange-600 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-white mb-2">🥤 Beverages</h2>
            <p className="text-gray-200 text-sm">
              Fresh juices, smoothies & soft drinks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
