import { Link } from 'react-router-dom';
import carrito from '../carrito.png';

function Carrito(){
    return (
        <Link to="/cart"><img src={carrito} className="carrito" alt="carrito de compras" width="24" height="24"></img></Link> 
    );
}

export default Carrito;