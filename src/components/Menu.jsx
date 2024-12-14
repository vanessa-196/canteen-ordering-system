//Menu.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RecommendationCard from "./RecommendationCard";

export default function Menu({ onLogout, cartItems, setCartItems }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMenu, setFilteredMenu] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleAddToCart = (item, quantity = 1) => {
    const token = localStorage.getItem("jwtToken");
    const userId = localStorage.getItem("user_id");

    if (token && userId) {
      fetch("http://localhost:3030/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          menu_id: item.id,
          quantity: quantity,
          price: item.price,
          user_id: userId,
        }),
      })
        .then((response) => {
          if (!response.ok) throw new Error("Failed to add item to cart");
          return response.json();
        })
        .then((data) => {
          setCartItems((prevItems) => [...prevItems, { ...item, quantity }]);
          setMessage(`Added ${item.food_name} to cart!`);
          setTimeout(() => setMessage(null), 3000);
        })
        .catch((error) => {
          console.error("Error adding item to cart:", error);
          setMessage("Error adding item to cart. Please try again.");
          setTimeout(() => setMessage(null), 3000);
        });
    } else {
      setMessage("Please log in to add items to the cart.");
      setTimeout(() => setMessage(null), 3000);
    }
  };

  useEffect(() => {
    fetch("http://localhost:3030/api/menu")
      .then((response) => response.json())
      .then((data) => {
        setMenuItems(data);
        setFilteredMenu(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching menu:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = menuItems.filter((item) =>
      item.food_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMenu(filtered);
  }, [searchTerm, menuItems]);

  return (
    <div className="p-6">
      <button onClick={onLogout} className="bg-red-500 text-white py-2 px-4 rounded-lg mb-6 hover:bg-red-600">
        Logout
      </button>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search Menu"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-full"
        />
      </div>

      <button onClick={() => navigate("/cart")} className="bg-green-500 text-white py-2 px-4 rounded-lg mb-6 hover:bg-green-600">
        View Cart ({cartItems.length})
      </button>

      {message && <p className="text-center text-green-600 mb-4">{message}</p>}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMenu.length === 0 ? (
            <p>No items found</p>
          ) : (
            filteredMenu.map((item) => (
              <RecommendationCard key={item.id} item={item} onAddToCart={handleAddToCart} />
            ))
          )}
        </div>
      )}
    </div>
  );
}
