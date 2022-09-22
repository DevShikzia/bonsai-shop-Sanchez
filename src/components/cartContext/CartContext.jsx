import { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addItem = (item, quantity) => {

    const itemFind = cartList.find(e => e.id === item.id)

    if(itemFind){
        
       itemFind.quantity += quantity

     }else{
        setCartList([
            ...cartList,
            {
              ...item,
              quantity,
            },
          ]);
     }
   
  };

  const removeItem = (id) => {
    setCartList(cartList.filter(item => item.id !== id))
      
  };

  const clear = () => setCartList([]);


  return (
    <CartContext.Provider value={{ cartList, addItem,clear,removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
