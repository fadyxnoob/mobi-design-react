import React, { useState, useEffect } from 'react';

const PopUp = ({ message }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        visible && (
            <div
                className='absolute right-5 top-30 bg-secondary rounded-lg px-2 py-1 transition duration-700 transform translate-y-0'
                style={{ animation: 'moveUp 1s forwards' }}
            >
                {message}
            </div>
        )
    );
}

export default PopUp;
