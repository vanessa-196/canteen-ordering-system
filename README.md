# Canteen Ordering System

## Project Overview
The **Canteen Ordering System** is a web-based platform designed for students and staff to browse the canteen menu, customize orders, place them in a cart, and track the status of their orders in real time. 

### Key Features:
- **User Authentication**: Secure login and registration system.
- **Menu Display & Customization**: Browse the menu with customization options like extra toppings.
- **Interactive Ordering System**: Add items to a cart, view order totals, and place orders.
- **Order Tracking & Loyalty Program**: Track order status and earn points redeemable for discounts.

This project provides an intuitive, seamless ordering experience, making it easier for users to manage their orders online.

---

## Deployment Link
[Canteen Ordering System](https://canteen-ordering-system-two.vercel.app/login) 

### Login Details
Use the following test credentials for authentication:
- **Username**: `vanessa.umenze@acity.edu.gh`
- **Password**: `webtech2024`

Alternatively, users can register and log in with their own credentials, as all data is stored in the database.

---

## Feature Checklist
- **User Registration & Profile Management**: Secure user registration, login, and profile management.
- **Menu Display & Customization**: Dynamic menu display with options for item customization.
- **Ordering System with Cart**: Add items to the cart, view order totals, and place orders.
- **Order Tracking & Loyalty Program**: Real-time order tracking and a loyalty program for earning points.

---

## Technologies Used
### Frontend:
- React.js
- Tailwind CSS
- Framer Motion (animations)

### Backend:
- Express.js
- PostgreSQL

### Authentication:
- JWT (JSON Web Tokens) for secure login and session management.

### State Management:
- React’s `useState` and `useEffect` hooks for application state management.

---

## Project Structure
### Frontend:
- **Login**: Users can log in with their credentials.
- **Menu**: Displays menu items with pricing and customization options.
- **Cart**: Shows items in the cart and allows users to remove them.
- **Order Tracking**: Tracks the status of orders using an order ID.
- **RecommendationCard**: Displays individual food items with customization options.

### Backend:
- **Authentication**: JWT-based authentication for secure login.
- **Cart Routes**: Routes for adding, fetching, and deleting cart items.
- **Database**: PostgreSQL database for managing users, menu data, and cart items.

---

## Installation Instructions
To run this project locally, follow these steps:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/vanessa-196/canteen-ordering-system.git
    cd canteen-ordering-system
    ```

2. **Install Dependencies**:
    - For the frontend:
      ```bash
      cd client
      npm install
      ```
    - For the backend:
      ```bash
      cd server
      npm install
      ```

3. **Set Up Environment Variables**:
    - Create a `.env` file in both the frontend and backend directories.
    - Add the necessary variables (e.g., API keys, database connection strings, JWT secret).

4. **Start the Application**:
    - For the frontend:
      ```bash
      npm start
      ```
    - For the backend:
      ```bash
      npm start
      ```

The application should now be running on your local host.

---

## Database Screenshots
![Database Screenshot 1](https://github.com/user-attachments/assets/c35e2f4d-e9c2-4aa3-996c-192e491add43)
![Database Screenshot 2](https://github.com/user-attachments/assets/42448735-51a4-4e7a-b106-9e88d2e56a09)
![Database Screenshot 3](https://github.com/user-attachments/assets/92cba93c-e8ed-4bc1-aade-cd12646c14ba)
![Database Screenshot 4](https://github.com/user-attachments/assets/94afd380-2787-49e6-bfea-95282fef5459)
![Database Screenshot 5](https://github.com/user-attachments/assets/8482cd1f-c296-4228-b831-42330d72d3b2)
![Database Screenshot 6](https://github.com/user-attachments/assets/6bb1a2e6-2122-445d-8c19-c5a994912758)

---

## Future Enhancements
- **Order History**: Allow users to view and reorder from past orders.
- **Admin Panel**: Interface for managing menu items, prices, and user orders.
- **Payment Integration**: Add payment gateways for in-app transactions.

---

## Conclusion
This project demonstrates skills in full-stack development, including building user-friendly interfaces with React and secure backend APIs using Express.js and PostgreSQL. 

While core features are functional, work is ongoing to refine the cart functionality and resolve CORS issues. Future updates will focus on expanding the system’s capabilities for better user experience.
