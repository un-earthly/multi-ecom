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
        const existingIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

        if (existingIndex !== -1) {
            // Item already exists in cart, update quantity
            const updatedCart = [...cart];
            updatedCart[existingIndex] = {
                ...updatedCart[existingIndex],
                quantity: updatedCart[existingIndex].quantity + 1, // Increment quantity
            };
            console.log(updatedCart)
            setCart(updatedCart);
        } else {
            // Item doesn't exist in cart, add it
            setCart([...cart, { ...item, quantity: 1 }]); // Add quantity property
        }
    };



    const removeItemFromCart = (i) => {
        setCart(cart.filter((item) => item.id !== i.id));
    };

    // Function to remove an item from the cart
    const removeFromCart = (i) => {
        const updatedCart = cart.map(item => {
            if (item.id === i.id) {
                if (item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 };
                } else {
                    return null; // Remove this item from the cart
                }
            }
            return item;
        }).filter(Boolean); // Remove null entries from the cart

        setCart(updatedCart);
    };

    const calculateTotalPrice = (cart) => {
        let totalPrice = 0;
        cart.forEach(item => {
            totalPrice += item.price * item.quantity;
        });
        return totalPrice.toLocaleString();
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
                removeItemFromCart,
                calculateTotalPrice
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
