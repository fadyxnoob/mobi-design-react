import React, { useState, useEffect } from 'react';
import { TiStarburst } from "react-icons/ti";
import Logo from '../../assets/images/logo.png';
import { Link, useLocation } from 'react-router-dom';

const SectionBar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);
    // const isActive = (path) => location.pathname === path;

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 600);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <div className='flex gap-20 items-center bg-primary px-10 py-2'>
            <div className="logoBar w-40 relative top-3 md:block hidden">
                <Link to="/">
                    <img src={Logo} alt="Logo" className='h-full mt-1' />
                </Link>
            </div>

            <div className="sectionBar bg-light w-full flex items-center justify-between relative top-5 md:top-1 border h-12">
                <div className="relative flex flex-col md:left-10 -left-1">
                    <TiStarburst className={` ${isActive('/design') ? 'text-red size-5' : 'text-light size-4'} rounded-xl`} />
                    <p
                        className={`top-8 ${isSmallScreen
                            ? isActive('/design')
                                ? 'text-red block'
                                : 'hidden'
                            : 'text-light block'
                            } font-normal absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm md:text-lg uppercase`}
                    >
                        design
                    </p>
                </div>

                <div className="relative flex flex-col">
                    <TiStarburst className={` ${isActive('/colors') ? 'text-red size-5' : 'text-light size-4'} rounded-xl`} />
                    <p
                        className={`top-8 ${isSmallScreen
                                ? isActive('/colors')
                                    ? 'text-red block'
                                    : 'hidden'
                                : 'text-light block'
                            } font-normal absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm md:text-lg uppercase`}
                    >
                        colors
                    </p>
                </div>

                <div className="relative flex flex-col">
                    <TiStarburst className={`size-4 ${isActive('/options') ? 'text-red size-5' : 'text-light'} rounded-xl`} />
                    <p
                        className={`top-8 ${isSmallScreen
                                ? 'hidden' && isActive('/options')
                                    ? 'text-red block'
                                    : 'hidden'
                                : 'text-light block'
                            } font-normal absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm md:text-lg uppercase`}
                    >
                        options
                    </p>
                </div>

                <div className="relative flex flex-col md:pr-10 pr-0">
                    <TiStarburst className={`size-4 ${isActive('/personalizations') ? 'text-red size-5' : 'text-light'} rounded-xl`} />
                    <p
                        className={`top-8 ${isSmallScreen
                                ? isActive('/personalizations')
                                    ? 'text-red block'
                                    : 'hidden'
                                : 'text-light block'
                            } font-normal absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm md:text-lg uppercase`}
                    >
                        personals
                    </p>
                </div>

                <div className="relative flex flex-col md:right-10 -right-1">
                    <TiStarburst className={`size-4 ${isActive('/submit') ? 'text-red size-5' : 'text-light'} rounded-xl`} />
                    <p
                        className={`top-8 ${isSmallScreen
                                ? isActive('/submit')
                                    ? 'text-red block'
                                    : 'hidden'
                                : 'text-light block'
                            } font-normal absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm md:text-lg uppercase`}
                    >
                        finsh
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SectionBar;
