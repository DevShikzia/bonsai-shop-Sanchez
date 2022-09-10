import './App.css';

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';


const App = () => {
  return (
    <> 
      <NavBar/>
      {/* <ItemListContainer  greeting='Catalogo desde props' /> */}
      <ItemDetailContainer/>
    </>
  );
}

export default App;
