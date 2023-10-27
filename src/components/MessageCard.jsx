const backgroundColor = {
    AI: "bg-third-active",
    USER: ""
};

const MessageCard = ({ message }) => {
    return (
        <div className={`flex gap-x-4 rounded-md py-5 px-5 ${backgroundColor[message.role]}`}>
            <span className="text-xl sm:text-2xl">{message.role === 'AI' ? "🤖" : "👨"}</span>
            <p className="text-inter">{message.text}</p>
        </div>
    )
}

export default MessageCard