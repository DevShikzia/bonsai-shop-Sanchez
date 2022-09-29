import { collection, doc, getDoc,getDocs, query,where } from "firebase/firestore";
import {db} from './firebaseConfig';


const firestoreFetch = async (category) => {
    let q;
     if(category){
        q = query(collection(db,'products'), where('category','==',+category))
     }else{
        q = query(collection(db,'products'))
     }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(item => ({
        id : item.id,
        ...item.data()
    }))

    return dataFromFirestore;
}

const firestoreFetchOne = async(id)=>{

    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id,
        ...docSnap.data()
      }
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
}

export {firestoreFetch,
        firestoreFetchOne};