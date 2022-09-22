//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer'; 
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:id" element={<ItemListContainer/>}/> 
           <Route path="/item/:id" element={<ItemDetailContainer/>}/> 
          <Route path="/cart" element={<Cart/>}/> 
        </Routes>
        <Footer/>
      </BrowserRouter> 
    </div>
  );
}

export default App;
