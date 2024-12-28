import React, { useContext } from 'react'
import { Context } from '../AuthContext/AuthContext'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/logo.png';
import {SocialMedia} from '../../Components'


const ResponsiveHeader = () => {
    const { isMobileMenuOpen, toggleAuthModal } = useContext(Context)
    return isMobileMenuOpen && (
        <div
            className='bg-primary p-10 absolute z-50 w-full transition-all duration-500 ease-in h-1/2'
        >
            <div className="flex items-center justify-between flex-col gap-5 h-auto absolute w-full top-0 left-0 overflow-hidden">

                <div className='w-full mx-auto'>
                    <Link to="/">
                        <img src={Logo} alt="Logo" className='h-12 mt-5 mx-auto' />
                    </Link>
                </div>

                <div className='flex items-center flex-col justify-center w-[90%]'>
                    <button onClick={() => navigate('/track-order')} className='text-light rounded-sm py-2 text-xl w-full'>
                        Track Order
                    </button>

                    <button onClick={() => navigate('/order-summary')} className='rounded-sm py-2 w-full text-xl text-light'>
                        Order Summary
                    </button>

                    <button onClick={toggleAuthModal} className='rounded-sm py-2 text-xl text-light w-full'>
                        Login / Register
                    </button>
                    <div className='flex items-center justify-center gap-1 py-2 text-xl text-light w-full'>
                        <button className='text-light bg-dark p-1 flex items-center justify-center rounded w-full'>CN</button>
                        <button className='text-light bg-dark p-1 flex items-center justify-center rounded w-full'>EN</button>
                        <button className='text-light bg-dark p-1 flex items-center justify-center rounded w-full'>NL</button>
                        <button className='text-light bg-dark p-1 flex items-center justify-center rounded w-full'>SK</button>
                        <button className='text-light bg-dark p-1 flex items-center justify-center rounded w-full'>PL</button>
                        <button className='text-light bg-dark p-1 flex items-center justify-center rounded w-full'>DE</button>
                    </div>
                    <button className='rounded-sm py-2 text-xl text-light w-full'>
                        Logout
                    </button>
                </div>
                {/* <SocialMedia /> */}
            </div>
        </div>
    )
}

export default ResponsiveHeader
