import ItemCount from './ItemCount';

const Blanco = { color: 'white' };

function ItemListContainer(props){
    return (
        <div>
        <p style={Blanco} >{props.greeting}</p>
        <ItemCount/>
        </div>
    );
}

export default ItemListContainer;