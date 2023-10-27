const InputText = ({ placeholder }) => {
    return (
        <div className="pb-2 pt-4">
            <input type={placeholder.toLowerCase()} name={placeholder.toLowerCase()} id={placeholder.toLowerCase()} placeholder={placeholder} className="block w-full p-4 text-lg rounded-md bg-third focus:outline-none" />
        </div>
    )
}

export default InputText