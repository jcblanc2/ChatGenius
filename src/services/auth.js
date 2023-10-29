import { auth } from "../../firebase";
import { signInWithPopup } from "firebase/auth";


export async function connectWithProvider(provider) {
    await signInWithPopup(auth, provider)
        .then((userCredential) => {
            const user = userCredential.user;
            localStorage.setItem('uid', JSON.stringify(user.uid));
        })
        .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
            if (errorCode === 'auth/email-already-in-use') {
                setAlertMessage("Email already exists.");
            }
            else if (errorCode === 'auth/weak-password') {
                setAlertMessage("Password is weak.");
            }
        });
}