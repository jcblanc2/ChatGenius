const AuthButton = ({ label, handleSubmit }) => {
    return (
        <button type="submit" className="uppercase block w-full p-4 text-lg rounded-full bg-secondary hover:bg-secondary-active focus:outline-none" onClick={handleSubmit}>{label}</button>
    )
}

export default AuthButton