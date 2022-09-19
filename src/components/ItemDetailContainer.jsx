import { useEffect, useState } from 'react';
import customFetch from '../utils/customFetch';
import ItemDetail from './ItemDetail';
import Loading from './Loading';
const {products} = require('../utils/data');

const ItemDetailContainer = () => {
    const [arrayList, setArrayList] = useState({});
    const [loading, SetLoading] = useState(false);
  
    useEffect(() => {
      SetLoading(true);
      customFetch(2000, products[0])
        .then((result) => setArrayList(result))
        .catch((err) => console.log(err));
    }, []);
  
    return (
      <div>
        <ItemDetail product={arrayList} />
      </div>
    );
  };

export default ItemDetailContainer;