// /src/components/Cart.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Cart({ isOpen, items, onClose, user }) {
  const [cartItems, setCartItems] = useState(items);

  useEffect(() => {
    // Optionally, fetch the user's cart from the backend when component mounts
  }, []);

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleAddToCart = (itemId, quantity = 1) => {
    const token = localStorage.getItem("jwtToken");  // Assuming the token is saved in localStorage

    fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,  // Include the token in the request
      },
      body: JSON.stringify({ itemId, quantity })
    })
      .then(response => response.json())
      .then(data => console.log('Item added to cart', data))
      .catch(error => console.error('Error:', error));
  };

  return (
    <motion.div
      className="fixed top-0 right-0 w-80 bg-white h-full shadow-lg"
      initial={{ x: "100%" }}
      animate={{ x: isOpen ? 0 : "100%" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <button className="p-4 text-red-500" onClick={onClose}>Close</button>
      <h2 className="text-xl font-bold p-4">Your Cart</h2>
      <ul className="p-4">
        {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between p-2 hover:bg-gray-100">
            <span>{item.name}</span>
            <span>${item.price}</span>
            <button onClick={() => handleRemoveItem(item.id)} className="text-red-500">Remove</button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
