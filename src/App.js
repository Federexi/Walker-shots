//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
//import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer'; 

function App() {
  return (
    <div>
      <Navbar/>
      {/*<ItemListContainer greeting="hola"/> */}
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
