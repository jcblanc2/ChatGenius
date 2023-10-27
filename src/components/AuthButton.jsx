const AuthButton = ({ label }) => {
    return (
        <button className="uppercase block w-full p-4 text-lg rounded-full bg-secondary hover:bg-secondary-active focus:outline-none">{label}</button>
    )
}

export default AuthButton