import { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addItem = (item, quantity) => {

    const itemFind = cartList.find(e => e.id === item.id)

    if(itemFind){
        
       itemFind.quantity += quantity
       setCartList([...cartList])

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

  const itemPriceTotal = (id) => {
      const item  = cartList.find(e => e.id === id)
      return item.quantity * item.price
  }

  const handbag = () => cartList.map(item => item.quantity).reduce((prev, curr) => prev + curr, 0)

  const totalPrice = () => cartList.map(item => itemPriceTotal(item.id)).reduce((prev, curr) => prev + curr, 0)

          


  return (
    <CartContext.Provider value={{ cartList, addItem,clear,removeItem,itemPriceTotal,handbag,totalPrice}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
