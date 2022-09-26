import { useContext } from 'react';
import { Link } from 'react-router-dom';
import carrito from '../carrito.png';
import { CartContext } from './CartContext';

function Carrito(){
    const { calcItemsQty} = useContext(CartContext)

    return (
        <Link to="/cart">
            <img src={carrito} className="carrito" alt="carrito de compras" width="24" height="24"></img>
            {(calcItemsQty() !== 0) && <span className='items'>{calcItemsQty()}</span>
            }
            </Link> 
    );
}

export default Carrito;