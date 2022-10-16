import { increment, serverTimestamp } from "firebase/firestore";
import { doc, setDoc, collection, updateDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartItem = ({product}) => {
    const {cartList, clear, deleteItem,  calcTotal } = useContext(CartContext)

    return(
        <div>
        <div class="cart">
    <ul class="cartWrap">
      <li class="items odd">
        
    <div class="infoWrap"> 
        <div class="cartSection">
        <img src={product.item.image} alt="" class="itemImg" />
          <h3>{product.item.title}</h3>
           <p>{product.qty} x ${product.item.price}</p>
          <p class="stockStatus"> In Stock</p>
        </div>  
    
        <div class="prodTotal cartSection">
          <p>${product.qty * product.item.price}</p>
        </div>
              <div class="cartSection removeWrap">
              <a className="remove" onClick={() => deleteItem(product.item.id)}>X</a>
        </div>
      </div>
      </li>
    </ul>
  </div>

</div>
    )
}

export default CartItem;