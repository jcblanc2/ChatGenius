import { useEffect, useState } from "react";

const backgroundColor = {
    assistant: "bg-third-active",
    user: ""
};

const MessageCard = ({ message }) => {
    const [displayedContent, setDisplayedContent] = useState('');

    useEffect(() => {
        const displayTextGradually = async () => {
            for (let i = 0; i <= message.content.length; i++) {
                setDisplayedContent(message.content.slice(0, i));
                await new Promise(resolve => setTimeout(resolve, 30));
            }
        };

        displayTextGradually();
    }, [message.content]);

    return (
        <div className={`flex gap-x-4 rounded-md py-5 px-5 ${backgroundColor[message.role]}`}>
            <span className="text-xl sm:text-2xl">{message.role === 'assistant' ? "🤖" : "👨"}</span>
            <p className="text-inter">{displayedContent}</p>
        </div>
    )
}

export default MessageCard