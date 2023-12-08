import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const añadirAlCarrito = (product, quantity) => {
    const existeProd = cart.findIndex((p)=> p.id === product.id)
    if (existeProd == -1) {
        const nuevoProd = {
                ...product,
                quantity,
                subTotal: product.precio*quantity,
        }
        setCart([...cart, nuevoProd])
    } else {
        const copiaCart = [...cart]
        copiaCart[existeProd].quantity += quantity
        copiaCart[existeProd].subTotal = copiaCart[existeProd].precio*copiaCart[existeProd].quantity
        setCart(copiaCart)
    }
  };

  const quitarProd = (id) => {
    const filtro = cart.filter((product) => product.id !== id);
    setCart(filtro);
  };

  const borrarTodo = () => {
    setCart([]);
  };

  

//   const isInCart = (productId) => {
//     return cart.some((product) => product.id === productId);
//   };
const total = () => {
    return cart.reduce((total, product) => total + product.subTotal, 0);
  };

  

  return (
    <CartContext.Provider
      value={{
        cart,
        añadirAlCarrito,
        quitarProd,
        borrarTodo,
        
        // isInCart,
total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
