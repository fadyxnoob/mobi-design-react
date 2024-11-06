import React from 'react';
import { Link } from 'react-router-dom';

function Topbar({ textColor, bgColor, siteTitle, iconText, icon }) {
    return (
        <>
            <div className={`bg-${bgColor} flex md:justify-between  sm:justify-center nsm:justify-center items-center h-12 w-full px-5 text-${textColor}`}>
                {/* Site Title */}
                <Link to="/">
                    <h1 className="sm:text-center text-white text-lg font-bold">
                        {siteTitle}
                    </h1>
                </Link>
                {/* <button className='text-primary p-1 rounded-sm px-2 xsm:block sm:hidden bg-light '>
                    Logout
                </button> */}
                {/* Icon Text and Icon (visible on md and above) */}
                <div className="hidden md:flex items-center space-x-2">
                    <p className="text-white text-lg font-medium">{iconText}</p>
                    <img src={icon} alt={iconText} className='h-7 cursor-pointer' id="goFullScreen" title='Go full screen' />
                </div>
            </div>
        </>
    );
}

export default Topbar;

