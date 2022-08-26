import './App.css';

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


const App = () => {
  return (
    <> 
      <NavBar/>
      <ItemListContainer  greeting='Catalogo desde props' />
    </>
  );
}

export default App;