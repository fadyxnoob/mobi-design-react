import React from 'react';

const StatusDets = ({ image, heading, p1, p2, alt }) => {
    return (
        <div className='flex w-full flex-col md:flex-row'>
            <div className="md:h-96 h-52 w-full flex items-center justify-center md:w-1/2">
                <img src={image} alt={alt} className='size-full object-contain ' />
            </div>
            <div className='m-5 md:m-0 p-5 w-full text-center text-light font-normal flex items-center flex-col justify-center md:w-1/2'>
                <h1 className='text-5xl'> {heading} </h1>
                <p className='mt-3'> {p1} </p>
                <p> {p2} </p>
            </div>
        </div>
    );
}

export default StatusDets;
