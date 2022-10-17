import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartItem = ({product}) => {
    const {deleteItem} = useContext(CartContext)

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
              <p className="remove href" onClick={() => deleteItem(product.item.id)}>X</p>
        </div>
      </div>
      </li>
    </ul>
  </div>

</div>
    )
}

export default CartItem;