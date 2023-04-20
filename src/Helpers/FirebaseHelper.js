import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, getDoc} from "firebase/firestore"; 
import { db } from "../firebase";

const addFavoriteFirebase = async ({objectToSave}, collectionName) => {
    try{
        const docRef = await addDoc(collection(db, collectionName), objectToSave);
        console.log("Document written to table " + collectionName + " with ID: ", docRef.id);
    } catch (e) {
        console.error("Error getting documents: ", e);
    }
}

const getFromFirebase  = async (collectionName) => {
    try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const docs = [];
        querySnapshot.forEach((doc) => {                    
            docs.push({...doc.data(),id: doc.id});
        });        
        console.log(JSON.stringify(docs));
        return docs;
    } catch (e) {
        console.log(e);
    }
}

const updateFromFirebase = async (idRef, collectionName) =>{
    await updateDoc(doc(db,collectionName, idRef), { fav: true });
}

const deleteFromFirebase = async (idRef, collectionName) =>{
    try{
        await deleteDoc(doc(db, collectionName, idRef ));
    } catch (e) {
        console.error("Error getting documents: ", e);
    }
}

// const checkFromFirebase = async (idRef, collectionName) =>{
//     try{
//         await getDoc(doc(db, collectionName, idRef));
//     } catch (e) {
//         console.error("Error getting documents: ", e);
//     }
// }

export { addFavoriteFirebase, updateFromFirebase, deleteFromFirebase, getFromFirebase };