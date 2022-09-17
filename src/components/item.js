const Item = ({product}) => {
    return(
    <div className="card" style={{"width": "12rem"}}>
        <img src={product.image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">$ {product.price}</p>
            <button className="btn btn-secondary">Ver detalles</button>
        </div>
    </div>
    )
}

export default Item;