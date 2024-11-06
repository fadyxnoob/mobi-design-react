import React from 'react';

const StatusDets = ({ image, heading, p1, p2, alt }) => {
    return (
        <div className='flex h-full w-full'>
            <div className="h-96 w-96 flex items-center justify-center w-1/2">

                <img src={image} alt={alt} className='size-full object-contain ' />

            </div>
            <div className='p-5 w-full text-center text-light font-normal  flex items-center flex-col justify-center'>

                <h1 className='text-5xl'> {heading} </h1>
                <p className='mt-3'> {p1} </p>
                <p> {p2} </p>

            </div>
        </div>
    );
}

export default StatusDets;
