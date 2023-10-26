const AuthButton = ({ label }) => {
    return (
        <button className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">{label}</button>
    )
}

export default AuthButton