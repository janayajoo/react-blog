import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore"; 
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

const updateFromFirebase = async ({objectToSave}, collectionName) =>{
}

const deleteFromFirebase = async (idRef, collectionName) =>{
    try{
        await deleteDoc(doc(db, collectionName, idRef ));
    } catch (e) {
        console.error("Error getting documents: ", e);
    }
}

export { addFavoriteFirebase, updateFromFirebase, deleteFromFirebase, getFromFirebase };