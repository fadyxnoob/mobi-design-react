import React from 'react';

const Card = ({ image, ALT, onClick, isSelected }) => {
    return (
        <div
            onClick={onClick}
            className={` ${isSelected ? 'border border-secondary rounded-lg' : ''}`}
        >
            <div className='designCard w-72 p-5 shadow-custom rounded-lg cursor-pointer'>
                <img src={image} alt={ALT} className='h-full w-full objec-fill' />
            </div>
        </div>
    );
}

export default Card;


