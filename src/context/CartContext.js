// CartContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context for the cart
const CartContext = createContext();

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext);

// Cart provider component
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Function to add an item to the cart
    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    // Function to remove an item from the cart
    const removeFromCart = (itemId) => {
        setCart(cart.filter((item) => item.id !== itemId));
    };

    // Function to clear the cart
    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
