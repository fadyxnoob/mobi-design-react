import React from 'react';
import ResetIcon from '../../assets/images/reset.png'
import { Link } from 'react-router-dom';

const Reset = ({ positionX = 'right-6', positionY = 'top-16', size='size-24' , nsm}) => {
    
    const handleRestLocalStorage = () => {
        localStorage.setItem('baseColor', '');
        localStorage.setItem('colorOne', '');
        localStorage.setItem('colorTwo', '');
        localStorage.setItem('logosColors', '');
        localStorage.setItem('riderNameColor', '');
        localStorage.setItem('riderNumberColor', '');
        localStorage.setItem('customSvg', '');
    }
    
    return (
        <>
            <div className={`flex ms-auto justify-end p-0 m-0 ${size} absolute ${positionX} ${positionY} ${nsm}`}>
                <Link to={'/'}>
                    <button className='h-full'>
                        <img
                            src={ResetIcon}
                            alt={ResetIcon}
                            className='resetPng h-full w-full object-cover size-20'
                            onClick={handleRestLocalStorage}
                        />
                    </button>
                </Link>
            </div>
        </>
    );
}

export default Reset;
