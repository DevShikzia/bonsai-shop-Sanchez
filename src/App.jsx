import { Routes, Route } from 'react-router-dom';

import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart'
import CartContextProvider from './components/CartContext';


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
