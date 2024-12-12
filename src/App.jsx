//app.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import OrderTracking from "./components/OrderTracking";

export default function App() {
  const [user, setUser] = useState(null); // Track authenticated user
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      setUser({ name: "Authenticated User" }); // Replace with decoded token data
    }
  }, []);

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
              path="/"
              element={
                <Menu
                  onAddToCart={(item) =>
                    setCartItems((prevItems) => [...prevItems, item])
                  }
                />
              }
            />
            <Route path="/cart" element={<Cart items={cartItems} />} />
            <Route path="/order-tracking" element={<OrderTracking status={0} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}
