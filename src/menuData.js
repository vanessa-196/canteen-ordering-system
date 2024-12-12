// Function to format prices in GHC
const formatPrice = (price) => `GHC ${price.toFixed(2)}`;  // Adjust the precision as needed

export const menuItems = [
  {
    id: 1,
    name: "Cheese Burger",
    price: formatPrice(35),
    image: "/assets/images/burger.jpg",
    description: "Delicious cheese burger with premium beef",
    options: ["Extra Cheese", "Bacon", "Lettuce", "Tomato"],
  },
  {
    id: 2,
    name: "Vegetable Pizza",
    price: formatPrice(40),
    image: "/assets/images/pizza.jpg",
    description: "A healthy pizza with a mix of fresh vegetables",
    options: ["Extra Olives", "Mushrooms", "Extra Cheese"],
  },
  {
    id: 3,
    name: "Chicken Wrap",
    price: formatPrice(35),
    image: "/assets/images/wrap.jpg",
    description: "Grilled chicken with a wrap of veggies and sauce",
    options: ["Spicy Sauce", "Cheese", "Lettuce"],
  },
  // Add more items as necessary
];
