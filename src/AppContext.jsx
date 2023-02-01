import React, { useState } from 'react';

export const Context = React.createContext();

const AppContext = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    if (localStorage !== undefined && localStorage.getItem('cartItems')) {
      return JSON.parse(localStorage.getItem('cartItems'));
    }

    JSON.stringify(localStorage.setItem('cartItems', '[]'));
    return [];
  });

  const [language, setLanguage] = useState('en');

  const patchCartItems = (active, item) => {
    if (active) {
      const newData = cartItems.filter(obj => obj.id !== item.id);
      localStorage.setItem('cartItems', JSON.stringify(newData));
      setCartItems(newData);
    } else {
      const newData = [...cartItems, item];
      localStorage.setItem('cartItems', JSON.stringify(newData));
      setCartItems(newData);
    }
  };

  return (
    <Context.Provider
      value={{ cartItems, patchCartItems, language, setLanguage }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
