import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";

const Cart = () => {
    const { cartList, clear } = useContext(CartContext);

    return(
        <>
            <h1 className="text-center">Your cart</h1>
            {cartList.length === 0 ?
            <div>
                <p>Carrito vacío &#x1F622;</p>
                <Link to="/"><button className="btn btn-primary agregar">Comprar</button></Link>
            </div>
            :
            <div>
                {cartList.map(element => <CartItem key={element.item.id} product={element}/>)}
                <button className="btn btn-primary agregar float-end cart" onClick={() => clear()}>Clear cart</button>
            </div>
            }
        </>
    )
}

export default Cart;