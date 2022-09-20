import {Link} from 'react-router-dom';

const Item = ({product}) => {
    return(
    <div className="card" style={{"width": "12rem"}}>
        <img src={product.image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">$ {product.price}</p>
            <Link to={"/item/" + product.id}> <button className="btn btn-secondary">Ver detalles</button> </Link>
        </div>
    </div>
    )
}

export default Item;