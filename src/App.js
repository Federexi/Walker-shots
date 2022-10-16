//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ItemDetailContainer from './containers/ItemDetailContainer'; 
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemListContainer from './containers/ItemListContainer';
import Footer from './components/Footer';
import Cart from './components/Cart';
import CartContextProvider from './components/CartContext';

function App() {
  return (
      <CartContextProvider>
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
    </CartContextProvider>
  );
}

export default App;
