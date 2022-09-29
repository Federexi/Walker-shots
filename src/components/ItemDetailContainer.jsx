import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import customFetch from '../utils/customFetch';
import ItemDetail from './ItemDetail';
import Loading from './Loading';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../utils/firebaseConfig';
const {products} = require('../utils/data');

const ItemDetailContainer = () => {
    const [arrayList, setArrayList] = useState({});
    const [loading, SetLoading] = useState(false);
    const {id} = useParams();
  
    useEffect(() => {
      SetLoading(true);
      const firestoreItemFetch = async() => {
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        docSnap.data()
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
    firestoreItemFetch()
      .then(result => setArrayList(result))
      .catch((err) => console.error(err))
      .finally(() => SetLoading(false))
    }, [id]);


  
    return (
      <div>
        {loading ? <Loading/> : <ItemDetail product={arrayList}/>}
      </div>
    );
  };

export default ItemDetailContainer;