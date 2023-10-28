import { useEffect, useState } from "react";

const Alert = ({ message }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000); 

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className={`p-2 bg-secondary items-center mt-2 leading-none rounded-full flex lg:inline-flex ${visible ? "" : 'hidden'}`} role="alert">
            <span className="flex rounded-full bg-white uppercase px-2 py-1 text-xs font-bold mr-3 text-secondary ">Error</span>
            <span className="font-semibold mr-2 text-left flex-auto">{message}</span>
            <svg className="fill-current opacity-75 h-4 w-4 text-white" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
        </div>
    )
}

export default Alert