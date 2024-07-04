'use server';

import { getFirestore, doc, setDoc, deleteDoc } from "firebase/firestore";
import { app } from '../../app/Firebase/AccesoFirebase';

const db = getFirestore(app);

export const createSession = async (uid: string) => {
    await setDoc(doc(db, 'Sessions', uid), {
        uid,
        createdAt: new Date(),
    });
};

export const removeSession = async (uid: string) => {
    await deleteDoc(doc(db, 'Sessions', uid));
};