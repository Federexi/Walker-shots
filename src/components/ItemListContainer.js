import { useEffect, useState } from 'react';
import getList from '../utils/data';
import ItemList from './ItemList';
import Loading from './Loading';

const ItemListContainer = () => {
    const [arrayList, SetArrayList] = useState([]);
    const [loading, SetLoading] = useState(false);

    useEffect(() => {
        SetLoading(true);
        getList()
        .then((response) => SetArrayList(response))
        .catch((err) => console.error(err))
        .finally(() => SetLoading(false))
    }, [])

    return (
        <div>
            {loading ? <Loading/> : <ItemList products={arrayList}/>}
        </div>
    );
}

export default ItemListContainer;