import InputText from "../components/InputText";
import AuthButton from "../components/AuthButton";

const Register = () => {
    return (
        <section className="min-h-screen flex items-center justify-center text-white bg-primary">
            <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 ">
                <div className="w-full py-6 z-20  ">
                    <h1 className="my-3 text-4xl font-inter font-semibold  tracking-wide">
                        Register
                    </h1>

                    <div className="py-6 space-x-4">
                        <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white cursor-pointer">f</span>
                        <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white cursor-pointer">G+</span>
                        <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white cursor-pointer">in</span>
                    </div>

                    <p className="text-gray-100">
                        or use email your account
                    </p>

                    <form action="" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                        <InputText placeholder='Full Name' />
                        <InputText placeholder='Email' />
                        <InputText placeholder='Password' />

                        <div className="px-4 pb-2 pt-4">
                            <AuthButton label='sign in' />
                        </div>

                        <div className="text-gray-400">
                            <span>Already have an account?</span>
                            <a href="#" className="hover:text-indigo-500"> Login</a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Register;
