import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Cart({ onClose }) {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetching the cart data when the component mounts
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      fetch('http://localhost:3030/api/cart', {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Fetched Cart:', data); // Check if data is an array
          if (Array.isArray(data)) {
            setCartItems(data);
          } else {
            console.error("Cart data is not an array:", data);
          }
          setLoading(false); // Set loading to false once the data is fetched
        })
        .catch((error) => {
          console.error('Error fetching cart:', error);
          setLoading(false); // Set loading to false if there is an error
        });
    } else {
      setLoading(false); // Set loading to false if there's no token
    }
  }, []);

  // Handling the removal of an item from the cart
  const handleRemoveItem = (id) => {
    const token = localStorage.getItem("jwtToken");
    fetch(`http://localhost:3030/api/cart/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(() => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
      })
      .catch((error) => console.error('Error removing item:', error));
  };

  if (loading) {
    return (
      <motion.div
        className="fixed top-0 right-0 w-80 bg-white h-full shadow-lg"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <button className="p-4 text-red-500" onClick={onClose}>Close</button>
        <h2 className="text-xl font-bold p-4">Your Cart</h2>
        <p>Loading...</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="fixed top-0 right-0 w-80 bg-white h-full shadow-lg"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <button className="p-4 text-red-500" onClick={onClose}>Close</button>
      <h2 className="text-xl font-bold p-4">Your Cart</h2>
      <ul className="p-4">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <li key={item.id} className="flex justify-between p-2 hover:bg-gray-100">
              <span>{item.food_name}</span>
              <span>{item.price} GHC</span>
              <button onClick={() => handleRemoveItem(item.id)} className="text-red-500">Remove</button>
            </li>
          ))
        )}
      </ul>
    </motion.div>
  );
}
