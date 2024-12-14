import { ShoppingCartIcon } from '@heroicons/react/24/solid';

export default function RecommendationCard({ item }) {
  const handleAddToCart = () => {
    // Function to add item to cart (you'll implement this later)
    console.log(`${item.food_name} added to cart`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-105">
      {/* Displaying image */}
      <img src={item.image} alt={item.food_name} className="w-full h-32 object-cover" />
      
      <div className="p-4">
        {/* Displaying the food name */}
        <h2 className="text-lg font-bold">{item.food_name}</h2>

        {/* Displaying price */}
        <p className="text-xl font-semibold">{item.price} GHC</p>
        
        {/* Optionally display quantity */}
        <p className="text-gray-600">Quantity: {item.quantity}</p>
        
        {/* Customization options if available */}
        <div className="mt-4">
          <h3 className="text-sm font-medium">Customize:</h3>
          {item.customization_options ? (
            <ul className="space-y-2">
              {item.customization_options.split(',').map((option, index) => (
                <li key={index} className="text-gray-700 text-sm">{option}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 text-sm">No customization options available.</p>
          )}
        </div>

        {/* Add to cart button */}
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
