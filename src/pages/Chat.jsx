import MessageCard from "../components/MessageCard";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useState } from "react";
import { sendMessageToTheModel } from "../services/sendMessage";

const Chat = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSend = async () => {
        if (message !== "") {
            const userMessage = {
                "role": "user",
                "content": message
            }

            setLoading(true)
            setMessages(prevMessages => [...prevMessages, userMessage]);

            const response = await sendMessageToTheModel(message);

            const assistantMessage = {
                "role": "assistant",
                "content": response.message
            }

            setLoading(false)

            setMessages(prevMessages => [...prevMessages, assistantMessage]);

            setMessage('');
        }
    };

    const handleSendMessage = (event) => {
        event.preventDefault();
        handleSend();
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            handleSend();
        }
    }

    const handleLogout = () => {
        signOut(auth).then(() => {
            localStorage.removeItem("uid");
            navigate("/");
        }).catch((error) => {
        });
    }

    return (
        <section className="min-h-screen flex flex-col justify-start text-white bg-primary">
            <div className="bg-third-active w-full py-5 fixed border-b-2 border-third flex justify-center items-center ">
                <h4 className="font-inter font-light text-center">
                    🤖 ChatGenius
                </h4>

                {
                    localStorage.getItem('uid') ?
                        <div data-ripple-light="true" data-tooltip-target="tooltip" onClick={handleLogout} className="has-tooltip absolute right-5 cursor-pointer">
                            <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M16 10v-5l8 7-8 7v-5h-8v-4h8zm-16-8v20h14v-2h-12v-16h12v-2h-14z" />
                            </svg>
                            <span class='tooltip p-1 rounded bg-third -ml-5'>Logout</span>
                        </div>
                        :
                        <button
                            type="button"
                            className="absolute right-5 text-center bg-third px-4 py-2 rounded-full hover:bg-primary transition duration-400"
                            onClick={() => navigate('/register')}>
                            Sign In
                        </button>
                }
            </div>

            <div className="mt-16 max-w-2xl mx-auto pb-40">
                {messages.map((item, index) => (
                    <MessageCard key={index} message={item} />
                ))}

                {loading &&
                    <div className={'flex gap-x-4 rounded-md py-5 px-5 bg-third-active'}>
                        <span className="text-xl sm:text-2xl">🤖</span>
                        <p className="text-inter">Loading...</p>
                    </div>
                }
            </div>

            <footer className="fixed bottom-0 left-0 right-0 bg-third-active border-t-2 border-third">
                <div className="container max-w-2xl mx-auto p-5 pb-8">
                    <form className="w-full flex justify-center items-center">
                        <div className="flex w-full">
                            <textarea type="text" placeholder="Send a message" className="flex-grow block w-full rounded-l-md border-0 py-3 pl-2 pr-1 text-white bg-third placeholder:text-gray-400  focus:outline-none sm:leading-6 resize-none overflow-hidden font-inter" spellCheck="false"
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyDown={handleKeyDown}
                                value={message}>
                            </textarea>
                            <button className="w-7 rounded-r-md bg-third" onClick={handleSendMessage}>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="text-gray-400 hover:text-secondary mr-2"><path d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z" fill="currentColor"></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </footer>
        </section>
    )
}

export default Chat