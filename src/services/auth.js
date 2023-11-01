import { auth } from "../../firebase";
import { signInWithPopup } from "firebase/auth";


export async function connectWithProvider(provider) {
    const userCredential = await signInWithPopup(auth, provider);
    return userCredential;
}