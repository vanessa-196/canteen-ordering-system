import { useState, useEffect } from 'react';
import RecommendationCard from "./RecommendationCard";

export default function Menu() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMenu, setFilteredMenu] = useState([]);

  useEffect(() => {
    fetch('/api/menu')
      .then(response => response.json())
      .then(data => setFilteredMenu(data))
      .catch(error => console.error('Error fetching menu:', error));
  }, []);

  useEffect(() => {
    // Filter menu items based on search term
    setFilteredMenu((prevMenu) =>
      prevMenu.filter(item =>
        item.food_name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <div className="p-6">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search Menu"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg w-full"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMenu.length === 0 ? (
          <p>No items found</p>
        ) : (
          filteredMenu.map((item) => (
            <RecommendationCard key={item.id} item={item} />
          ))
        )}
      </div>
    </div>
  );
}
