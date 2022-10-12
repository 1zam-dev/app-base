import React, { useState } from "react";
import { useContext } from "react";
import { cookies } from "../services/fakeData";

const StoreContext = React.createContext<any>({});
export const useStore = () => useContext(StoreContext);

interface IProvider {
  children: React.ReactElement;
}

const Provider: React.FC<IProvider> = ({ children }) => {
  const [user, setUser] = useState();
  const [cart, setCart] = useState({ products: [] });
  const [orders, setOrders] = useState([]);

  const value = {
    user,
    cart,
    cookies,
    orders,
    updateUser: setUser,
    updateCart: setCart,
    updateOrders: setOrders,
    emptyCart: () => setCart({ products: [] }),
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export default Provider;
