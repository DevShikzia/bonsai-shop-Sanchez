import { Routes, Route } from 'react-router-dom';

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Cart from './components/cart/Cart'
import CartContextProvider from './components/cartContext/CartContext';


import './App.css';

const App = () => {
  return (
    <CartContextProvider>
     <NavBar/>
      <Routes>
              <Route path='/' element={<ItemListContainer/>} />
              <Route path='/category/:id' element={<ItemListContainer/>} />
              <Route path='/product/:id' element={<ItemDetailContainer/>} />           
              <Route path='/cart' element={<Cart/>} />           
              {/* <Route path='*' element={<ItemListContainer/>} /> */}
      </Routes>
      </CartContextProvider> 
  );
}

export default App;
