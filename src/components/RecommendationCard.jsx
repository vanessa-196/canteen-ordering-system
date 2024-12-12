// /src/components/recommendation.jsx

import { ShoppingCartIcon } from '@heroicons/react/24/solid';

export default function RecommendationCard({ item }) {
  const handleAddToCart = () => {
    // Function to add item to cart (you'll implement this later)
    console.log(`${item.name} added to cart`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-105">
      <img src={item.image} alt={item.name} className="w-full h-32 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold">{item.name}</h2>
        <p className="text-gray-600">{item.description}</p>
        {/* Corrected price display */}
        <p className="text-xl font-semibold">{item.price} GHC</p>
        
        <div className="mt-4">
          <h3 className="text-sm font-medium">Customize:</h3>
          <ul className="space-y-2">
            {item.options.map((option, index) => (
              <li key={index} className="text-gray-700 text-sm">{option}</li>
            ))}
          </ul>
        </div>

        <button 
          onClick={handleAddToCart} 
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          <ShoppingCartIcon className="w-5 h-5 inline-block mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
