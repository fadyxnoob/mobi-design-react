import React, { useState, useEffect } from 'react'
import { FaXmark } from "react-icons/fa6";


const Alert = ({ message, type, onClose }) => {
   
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (message) {
            setVisible(true);
            const timer = setTimeout(() => {
            setVisible(false);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [message, onClose]);

    if (!visible) return null;

    const alertStyles = {
        success: 'bg-green-500 text-light',
        error: 'bg-red text-white',
        info: 'bg-blue text-white',
        warning: 'bg-yellow text-black',
    };



    return (
        <div className={`z-50 px-4 py-1 rounded-md shadow-md ${alertStyles[type] || ''} h-12 flex justify-between fixed z-50 w-fit right-5 top-2`}>
            <div className="flex items-center justify-between w-full">
                <span>{message}</span>
                <button
                    onClick={() => {
                        setVisible(false);
                        onClose();
                    }}
                    className="ml-4 text-lg focus:outline-none text-black rounded-full bg-light p-2 "
                >
                    <FaXmark />
                </button>
            </div>
        </div>
    )  
}

export default React.memo(Alert)
