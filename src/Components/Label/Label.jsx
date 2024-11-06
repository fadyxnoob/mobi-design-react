import React from 'react';

const Label = ({ title, onClick, label }) => {
    return (
        <>
            <div
                className={`w-full h-11  text-light mt-2 flex items-center pl-10 cursor-pointer rounded-sm nsm:text-sm z-10
                    ${label === title ? 'bg-primary border border-secondary' : 'bg-secondary'}`
                }
                onClick={onClick}
            >
                {title}
            </div>
        </>
    );
}

export default Label;

