import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartItem = ({product}) => {
    const {deleteItem} = useContext(CartContext)

    return(
        <div className="card" style={{width: "12rem", height: "10rem"}}>
            <img src={product.item.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{product.item.title}</h5>
                <p className="card-text">Cantidad: {product.qty}</p>
                <p className="card-text">Precio p/u: ${product.item.price}</p>
                <button className="btn btn-primary btn-danger" onClick={() => deleteItem(product.item.id)}>Delete</button>            
            </div>
        </div>
    )
}

export default CartItem;