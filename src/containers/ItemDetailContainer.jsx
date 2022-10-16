import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import ItemDetail from '../components/ItemDetail';
import Loading from '../components/Loading';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../utils/firebaseConfig';

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
        return {
            id: id,
            ...docSnap.data()
        }
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