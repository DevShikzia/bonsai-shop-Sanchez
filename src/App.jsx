import './App.css';

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
     <NavBar/>
      <Routes>
              <Route path='/' element={<ItemListContainer/>} />
              <Route path='/category/:id' element={<ItemListContainer/>} />
              <Route path='/product/:id' element={<ItemDetailContainer/>} />           
              {/* <Route path='*' element={<ItemListContainer/>} /> */}
      </Routes>
      </> 
  );
}

export default App;
