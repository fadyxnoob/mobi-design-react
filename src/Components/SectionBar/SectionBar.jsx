import React from 'react';
import { TiStarburst } from "react-icons/ti";
import Logo from '../../assets/images/logo.png';
import { Link, useLocation } from 'react-router-dom';

const SectionBar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <div className='flex gap-20 items-center bg-primary px-10 py-2 '>
            <div className="logoBar w-40 relative top-3 block nsm:hidden">
                <Link to="/">
                    <img src={Logo} alt="Logo" className='h-full mt-1' />
                </Link>
            </div>

            <div className="sectionBar bg-light w-full flex items-center justify-between nsm:relative nsm:top-5">
                <div className="relative flex flex-col left-10 nsm:left-5">
                    <TiStarburst className={` ${isActive('/design') ? 'text-red size-5' : 'text-light size-4'} rounded-xl`} />
                    <p className={`top-8 ${isActive('/design') ? 'text-red' : 'text-light'} font-normal text-lg absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 nsm:text-xs`}>
                        DESIGN
                    </p>
                </div>

                <div className="relative flex flex-col">
                    <TiStarburst className={` ${isActive('/colors') ? 'text-red size-5' : 'text-light size-4'} rounded-xl`} />
                    <p className={`top-8 ${isActive('/colors') ? 'text-red ' : 'text-light'} font-normal text-lg absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 nsm:text-xs`}>
                        COLOR
                    </p>
                </div>

                <div className="relative flex flex-col">
                    <TiStarburst className={`size-4 ${isActive('/options') ? 'text-red size-5' : 'text-light'} rounded-xl`} />
                    <p className={`top-8 ${isActive('/options') ? 'text-red' : 'text-light'} font-normal text-lg absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 nsm:text-xs`}>
                        OPTIONS
                    </p>
                </div>

                <div className="relative flex flex-col pr-10 nsm:pr-0">
                    <TiStarburst className={`size-4 ${isActive('/personalizations') ? 'text-red size-5' : 'text-light'} rounded-xl`} />
                    <p className={`top-8 ${isActive('/personalizations') ? 'text-red' : 'text-light'} font-normal text-lg absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 nsm:text-xs`}>
                        PERSONALIZATION
                    </p>
                </div>

                <div className="relative flex flex-col right-10 nsm:right-5">
                    <TiStarburst className={`size-4 ${isActive('/submit') ? 'text-red size-5' : 'text-light'} rounded-xl`} />
                    <p className={`top-8 ${isActive('/submit') ? 'text-red' : 'text-light'} font-normal text-lg absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 nsm:text-xs`}>
                        FINISH
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SectionBar;
