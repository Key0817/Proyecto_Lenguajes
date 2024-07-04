import {
    type User,
    GoogleAuthProvider,
    signInWithPopup,
    UserCredential ,
    onAuthStateChanged as _onAuthStateChanged,

} from "firebase/auth";

import { auth } from "./AccesoFirebase";

export function onAuthStateChanged(callback: (authUser: User | null) => void) {
    return _onAuthStateChanged(auth, callback);
}

export const signInWithGoogle = async (): Promise<UserCredential> => {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(auth, provider);
};

export async function signOutWithGoogle() {
    try {
        await auth.signOut();
    } catch (error) {
        console.log('error al cerrar sesion', error)
    }
}

