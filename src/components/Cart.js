import { increment, serverTimestamp } from "firebase/firestore";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";
import { doc, setDoc, collection, updateDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

const Cart = () => {
    const { cartList, clear, calcTotal } = useContext(CartContext);

        const createOrder = async () => {
            let itemForDB = cartList.map(ele => ({
                id: ele.item.id,
                price: ele.item.price,
                title: ele.item.title,
                quantity: ele.qty
            }))
            let order = {
                buyer: {
                    name: "Alex Mendez",
                    email: "alexmendez@gmail.com",
                    phone: "145093212"
                },
                date: serverTimestamp(),
                items: itemForDB, 
                total: calcTotal()
            }

            const newOrderRef = doc(collection(db, "orders"))
            await setDoc(newOrderRef, order);

            cartList.forEach(async(ele) => {
                //update stock in DB
                const itemRef = doc(db, "products", ele.item.id);
                await updateDoc(itemRef, {
                  stock: increment(-ele.qty)
                });
            })
            clear()
            alert("your order has been created. Your ID's order is: " + newOrderRef.id )

        }

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
                <p className="float-end total">Total: ${calcTotal()}</p>
                <button onClick={createOrder} className="btn btn-primary agregar float-end">Checkout now</button>
            </div>
            }
        </>
    )
}

export default Cart;