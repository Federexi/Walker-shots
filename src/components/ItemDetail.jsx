import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import  { useState } from "react";
import Button from '@mui/material/Button'

const ItemDetail = ({product}) => {
  const [itemCount, setItemCount] = useState(0)

  const onAdd = (cant) => {
    setItemCount(cant)
  }

    return (
      <div className="vino-container">
        <img className="vino-imagen" alt="a_wine_image" src={product.image} />
        <div className="vino-orden">
          <h3 className="vino-titulo">{product.title}</h3>
          <p className="vino-descripcion">{product.description}</p>
          <p className="vino-precio">${product.price}</p>
          {itemCount === 0
          ? <ItemCount stock={product.stock} initial={product.initial} onAdd={onAdd}/>
          : <Link to="/cart"><button className="btn btn-light">Revisar</button></Link>
          }
        </div>
      </div>
    );
  };
  
export default ItemDetail;