import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export const getUserDocument = async (id) => {
    try {
        const userRef = doc(db, "users", id);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
            return { error: null, data: {document_id: userSnap.id, ...userSnap.data()} };
        } else {
            return { error: 'User document does not exist', data: null };
        }
    } catch (error) {
        return { error: error, data: null};
    }
};

export const createUserDocument = async (data) => {
    try {
        const userRef = doc(db, "users", data.uid);
        await setDoc(userRef, data);

        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
            return { error: null, data: {document_id: userSnap.id, ...userSnap.data()} };
        } else {
            return { error: 'User document has not been created', data: null };
        }
    } catch (error) {
        return { error: error.message, data: null };
    }
};