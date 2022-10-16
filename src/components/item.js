import {Link} from 'react-router-dom';

const Item = ({product}) => {    
    return(
    <div className="card">
        <div className="imgBox">
        <img src={product.image} className="alcohol" alt="..."/>
        </div>
        <div className="contentBox">
            <h3>{product.title}</h3>
            <h4>$ {product.price}</h4>
            <Link to={"/item/" + product.id}> <button className="buy button type1">Ver detalles</button> </Link>
        </div>
    </div>
    )
}

export default Item;