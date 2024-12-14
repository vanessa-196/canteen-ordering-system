//App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import OrderTracking from "./components/OrderTracking";

export default function App() {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      try {
        const decoded = JSON.parse(atob(token.split(".")[1])); // This is to decode the JWT payload
        if (decoded.exp > Date.now() / 1000) {
          setUser({ id: decoded.user_id, name: decoded.name });
        } else {
          console.warn("Token expired");
          localStorage.removeItem("jwtToken");
        }
      } catch (err) {
        console.error("Invalid token:", err);
        localStorage.removeItem("jwtToken");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("user_id");
    setUser(null);
  };

  return (
    <Router>
      <Routes>
        {!user ? (
          <>
            <Route path="/login" element={<Login onLoginSuccess={setUser} />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <>
            <Route
              path="/menu"
              element={<Menu cartItems={cartItems} setCartItems={setCartItems} onLogout={handleLogout} />}
            />
            <Route path="/cart" element={<Cart onClose={() => setCartItems([])} />} />
            <Route path="/order-tracking" element={<OrderTracking status={0} />} />
            <Route path="*" element={<Navigate to="/menu" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}
