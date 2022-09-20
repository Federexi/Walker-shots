import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import customFetch from '../utils/customFetch';
import ItemDetail from './ItemDetail';
import Loading from './Loading';
const {products} = require('../utils/data');

const ItemDetailContainer = () => {
    const [arrayList, setArrayList] = useState({});
    const [loading, SetLoading] = useState(false);
    const {id} = useParams();
  
    useEffect(() => {
      SetLoading(true);
      if (id) {
        customFetch(2000, products.find(item => item.id == id))
          .then((response) => setArrayList(response))
          .catch((err) => console.log(err))
          .finally(() => SetLoading(false));  
      } else {
        customFetch(2000, products)
        .then((result) => setArrayList(result))
        .catch((err) => console.log(err))
        .finally(() => SetLoading(false));
      }
    }, [id]);
  
    return (
      <div>
        {loading ? <Loading/> : <ItemDetail product={arrayList}/>}
      </div>
    );
  };

export default ItemDetailContainer;