import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { createUserDocument, getUserDocument } from "./userAPI";

export const authState = async () => {
    try {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const userData = {
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                };
                
                return {error: null, data: userData};
            } else {
                return {error: null, data: null};
            }
        });
    } catch (error) {
        return {error: error, data:  null};
    }
};

export const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const userId = userCredential.user.uid;

        const { error, data } = await getUserDocument(userId);

        if (error) {
            throw new Error(error);
        }

        return { error: null, data };
    } catch (error) {
        return { error: error.code, data: null };
    }
};

export const signUp = async (email, password, payload) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const userId = userCredential.user.uid;

        const { error, data } = await createUserDocument({ uid: userId, ...payload });

        if (error) {
            throw new Error(error);
        }

        return { error: null, data };
    } catch (error) {
        return { error: error.code, data: null };
    }
};

export const resetPassword = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);

        return { error: null, data: { message: 'A password reset email has been sent to your email address.' } };
    } catch (error) {
        return { error: error.code, data: null };
    }
};