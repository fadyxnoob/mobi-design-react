import React, { useContext } from 'react';
import Logo from '../../assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaBarsStaggered } from "react-icons/fa6";
import { Context } from '../';
import ResponsiveHeader from './ResponsiveHeader';

function Header() {
    const { toggleAuthModal, handleMobileMenu } = useContext(Context);

    return (
        <>
           <div className='pt-4 md:hidden'>
           <FaBarsStaggered
                onClick={handleMobileMenu}
                className='size-6 ml-auto mr-2 cursor-pointer text-secondary'
            />
           </div>
            <div className="hidden md:flex items-center justify-between h-auto absolute w-full top-1 left-0 overflow-hidden md:h-12">

                <div className='block w-full px-5'>
                    <Link to="/">
                        <img src={Logo} alt="Logo" className='h-12 mt-1' />
                    </Link>
                </div>

                <div className='flex items-start justify-around mt-2 w-full h-full gap-1 px-5'>
                    <Link to={'/track-order'} className='bg-light rounded-sm me-1 px-2 text-sm py-1 cursor-pointer'>
                        Track Order
                    </Link>

                    <Link to={'/order-summary'} className='bg-light rounded-sm px-2 text-sm py-1 cursor-pointer'>
                        Order Summary
                    </Link>

                    <button onClick={toggleAuthModal} className='text-dark rounded-sm px-2 py-1 text-sm border bg-light'>
                        Login / Register
                    </button>
                    <div className='md:flex items-center justify-center gap-1 hidden'>
                        <button className='text-light bg-dark p-1 flex items-center justify-center rounded'>CN</button>
                        <button className='text-light bg-dark p-1 flex items-center justify-center rounded'>EN</button>
                        <button className='text-light bg-dark p-1 flex items-center justify-center rounded'>NL</button>
                        <button className='text-light bg-dark p-1 flex items-center justify-center rounded'>SK</button>
                        <button className='text-light bg-dark p-1 flex items-center justify-center rounded'>PL</button>
                        <button className='text-light bg-dark p-1 flex items-center justify-center rounded'>DE</button>
                    </div>
                    <button className='p-1 rounded-sm px-2 bg-light ml-2 text-primary text-sm'>
                        Logout
                    </button>
                </div>
            </div>

            <ResponsiveHeader />
        </>
    );
}

export default Header;
