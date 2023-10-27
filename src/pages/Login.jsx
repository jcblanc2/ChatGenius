import InputText from "../components/InputText";
import AuthButton from "../components/AuthButton";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <section className="min-h-screen flex items-center justify-center text-white bg-primary">
            <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 ">
                <div className="w-full py-6 z-20  ">
                    <h1 className="my-3 text-4xl font-inter font-semibold  tracking-wide">
                        Sign in
                    </h1>

                    <div className="py-6 space-x-4">
                        <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg cursor-pointer bg-secondary">f</span>
                        <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg bg-secondary cursor-pointer">G+</span>
                        <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg bg-secondary cursor-pointer">in</span>
                    </div>

                    <p className="text-gray-100">
                        or use email your account
                    </p>

                    <form action="" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                        <InputText placeholder='Email' />
                        <InputText placeholder='Password' />

                        <div className="px-4 pb-2 pt-4">
                            <AuthButton label='sign in' />
                        </div>

                        <div className="text-white">
                            <span>Don't have an account?</span>
                            <Link to='/register' className="hover:text-secondary"> Register</Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>)
}

export default Login