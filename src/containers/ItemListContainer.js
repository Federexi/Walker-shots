import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import ItemList from '../components/ItemList';
import Loading from '../components/Loading';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../utils/firebaseConfig';

const ItemListContainer = () => {
    const [arrayList, SetArrayList] = useState([]);
    const [loading, SetLoading] = useState(false);
    const {id} = useParams();

    useEffect(() => {
        SetLoading(true);
        const firestoreFetch = async() => {
            let q
            if (id)  {
                q = query(collection(db, "products"), where('categoryId', "==", parseInt(id))) 
            }else {
                q = query(collection(db, "products"))  
            }
        const querySnapshot = await getDocs(q);
        const dataFromFirestore = querySnapshot.docs.map(document => ({
            id: document.id,
            ...document.data()
        }))
        return dataFromFirestore
        }
        firestoreFetch()
            .then(result => SetArrayList(result))
            .catch((err) => console.error(err))
            .finally(() => SetLoading(false))
    }, [id])

    return (
        <div>
            {loading ? <Loading/> : <ItemList products={arrayList}/>}
        </div>
    );
}

export default ItemListContainer;