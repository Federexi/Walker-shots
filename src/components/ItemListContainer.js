import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import ItemList from './ItemList';
import Loading from './Loading';
import customFetch from '../utils/customFetch';
const {products} = require('../utils/data');

const ItemListContainer = () => {
    const [arrayList, SetArrayList] = useState([]);
    const [loading, SetLoading] = useState(false);
    const {id} = useParams();

    useEffect(() => {
        SetLoading(true);
        if(id) {
            customFetch(2000, products.filter(item => item.categoryId == id))
                .then((response) => SetArrayList(response))
                .catch((err) => console.error(err))
                .finally(() => SetLoading(false))    
        } else{
            customFetch(2000, products)
                .then((response) => SetArrayList(response))
                .catch((err) => console.error(err))
                .finally(() => SetLoading(false))
        }
    }, [id])

    return (
        <div>
            {loading ? <Loading/> : <ItemList products={arrayList}/>}
        </div>
    );
}

export default ItemListContainer;