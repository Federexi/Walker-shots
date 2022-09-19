import ItemCount from './ItemCount';

const ItemDetail = ({product}) => {
    return (
      <div className="vino-container">
        <img className="vino-imagen" alt="a_wine_image" src={product.image} />
        <div className="vino-orden">
          <h3 className="vino-titulo">{product.title}</h3>
          <p className="vino-descripcion">{product.description}</p>
          <p className="vino-precio">${product.price}</p>
          <ItemCount stock={8} initial={1}/>
        </div>
      </div>
    );
  };
  
export default ItemDetail;