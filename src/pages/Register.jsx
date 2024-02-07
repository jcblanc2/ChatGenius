import InputText from "../components/InputText";
import AuthButton from "../components/AuthButton";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "../../firebase";
import { useState } from "react";
import Alert from "../components/Alert";
import { connectWithProvider } from "../services/auth";


const Register = () => {
    const navigate = useNavigate();

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                localStorage.setItem('uid', JSON.stringify(user.uid));
                navigate("/chat");
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

    const connectWithGoogle = async () => {
        try {
            const user = await connectWithProvider(googleProvider);
            localStorage.setItem('uid', JSON.stringify(user.uid));
            navigate("/chat");
        } catch (error) {
            const errorCode = error.code;

            if (errorCode === 'auth/email-already-in-use') {
                setAlertMessage("Email already exists.");
            }
            else if (errorCode === 'auth/weak-password') {
                setAlertMessage("Password is weak.");
            }
        }
    }

    const connectWithFacebook = async () => {
        try {
            const user = await connectWithProvider(facebookProvider);
            localStorage.setItem('uid', JSON.stringify(user.uid));
            navigate("/chat");
        } catch (error) {
            const errorCode = error.code;

            if (errorCode === 'auth/email-already-in-use') {
                setAlertMessage("Email already exists.");
            }
            else if (errorCode === 'auth/weak-password') {
                setAlertMessage("Password is weak.");
            }
        }
    }

    return (
        <section className="min-h-screen flex items-center justify-center text-white bg-primary">
            <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 ">
                <div className="w-full py-6 z-20  ">
                    <h1 className="my-3 text-4xl font-inter font-semibold  tracking-wide">
                        Register
                    </h1>

                    <div className="py-6 space-x-4">
                        <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg bg-secondary cursor-pointer" onClick={connectWithFacebook}>f</span>
                        <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg bg-secondary cursor-pointer" onClick={connectWithGoogle}>G+</span>
                    </div>

                    <p className="text-gray-100">
                        or use email your account
                    </p>

                    <form action="" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                        <InputText placeholder='Full Name' handleChange={(e) => setFullName(e.target.value)} />
                        <InputText placeholder='Email' handleChange={(e) => setEmail(e.target.value)} />
                        <InputText placeholder='Password' handleChange={(e) => setPassword(e.target.value)} />

                        <div className="px-4 pb-2 pt-4">
                            <AuthButton label='sign in' handleSubmit={onSubmit} />
                        </div>

                        <div className="text-white">
                            <span>Already have an account?</span>
                            <Link to="/login" className="hover:text-secondary"> Login</Link>
                        </div>

                        {alertMessage && <Alert message={alertMessage} />}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Register;
