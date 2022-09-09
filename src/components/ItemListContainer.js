const Blanco = { color: 'white' };

function ItemListContainer(props){
    return (
        <p style={Blanco} >{props.greeting}</p>
    );
}

export default ItemListContainer;