//Recommendation.jsx
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function RecommendationCard({ item, onAddToCart }) {
  const [quantity, setQuantity] = useState(1); // Setting the defaqult quantity to 1

  const handleIncrease = () => setQuantity((prevQuantity) => Math.min(prevQuantity + 1, item.quantity)); // Ensuring the quantity doesn't exceed available stock
  const handleDecrease = () => setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1)); // Prevent negative or zero quantity

  const handleAddToCart = () => {
    onAddToCart(item, quantity); // Triggering the add-to-cart function passed from parent with the selected quantity
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-105">
      <img src={item.image} alt={item.food_name} className="w-full h-32 object-cover" />
      
      <div className="p-4">
        <h2 className="text-lg font-bold">{item.food_name}</h2>
        <p className="text-xl font-semibold">{item.price} GHC</p>
        <p className="text-gray-600">Quantity Available: {item.quantity}</p>

        <div className="mt-4">
          <h3 className="text-sm font-medium">Customize:</h3>
          {item.customization_options && item.customization_options.length > 0 ? (
            <ul className="space-y-2">
              {item.customization_options.map((option, index) => (
                <li key={index} className="text-gray-700 text-sm">
                  {option.option} (+{option.price} GHC)
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 text-sm">No customization options available.</p>
          )}
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center mt-4">
          <button
            onClick={handleDecrease}
            className="px-2 py-1 bg-gray-300 text-white rounded-md"
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, Math.min(e.target.value, item.quantity)))}
            className="mx-2 w-12 text-center border rounded-md"
            min="1"
            max={item.quantity}
          />
          <button
            onClick={handleIncrease}
            className="px-2 py-1 bg-gray-300 text-white rounded-md"
          >
            +
          </button>
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
