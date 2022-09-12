import { useState} from 'react';

function ItemCount({stock, initial, onAdd}) {
    const [number, setNumber] = useState(1);

    const handleNumberSum = () => {
        if(number >= 5){
            return
        }
        setNumber(number+1)
    }

    const handleNumberMin = () => {
        if(number <= 1){
            return
        }
        setNumber(number-1)
    }

    const addToCart = () => {
        alert(`Has añadido ${number} productos`)
    }

    return (
        <div className="d-grid gap-2 d-md-block">
            <button className="btn btn-primary resta" type="button" onClick={handleNumberMin}>-</button>
            {number}
            <button className="btn btn-primary suma" type="button" onClick={handleNumberSum}>+</button>
            <button className="btn btn-primary agregar" type="button" onClick={addToCart}>Add to cart</button>
        </div>
 )  
}

export default ItemCount;