import {useState, createContext} from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (product, qty) => {
        if(isInCart(product.id)){
            const indexItem = cartList.findIndex(ele => ele.item.id === product.id);
            cartList[indexItem].qty = cartList[indexItem].qty + qty;
            setCartList([...cartList]);
        } else {
            setCartList([...cartList, {item: product, qty}])
        }
    }

    const clear = () => {
        setCartList([])
    }

    const deleteItem = (id) => {
        const updateCart = cartList.filter(element => element.item.id !== id )
        setCartList(updateCart)
    }

    const isInCart = (id) => {
        return cartList.some(element => element.item.id === id)
    }

    const calcTotal = () => {
        return cartList.reduce((acc, itemCart) => acc + (itemCart.item.price * itemCart.qty), 0)
    }

    const calcItemsQty = () => {
        return cartList.reduce((acc, itemCart) => acc + itemCart.qty, 0)
    }

    return(
        <CartContext.Provider value={{cartList, addItem, clear, deleteItem, isInCart, calcTotal, calcItemsQty}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;