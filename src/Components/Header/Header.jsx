import React, { useContext } from 'react';
import Logo from '../../assets/images/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../';

function Header() {
    const navigate = useNavigate()
    const { toggleAuthModal } = useContext(Context);

    return (
        <>
            <div className="px-5 mt-1 flex items-center justify-between h-12 absolute w-full top-0 left-0">
                <Link to="/">
                    <div className='nsm:hidden block'>
                        <img src={Logo} alt="Logo" className='h-12 mt-1' />
                    </div>
                </Link>

                <div className='flex items-center nsm:w-full nsm:justify-between'>
                    <button onClick={ () => navigate('/track-order')} className='bg-light px-1 rounded-sm me-1 px-2 nsm:text-sm nsm:py-1'>
                        Track Order
                    </button>

                    <button onClick={() => navigate('/order-summary')} className='bg-light px-1 rounded-sm px-2 nsm:text-sm  nsm:py-1'>
                        Order Summary
                    </button>

                    <button onClick={toggleAuthModal} className='text-light p-1 rounded-sm px-2 nsm:text-sm  nsm:py-2'>
                        Login / Register
                    </button>
                    <div className='flex items-center justify-center gap-1 nsm:hidden'>
                        <button className='text-light bg-dark p-1 flex items-center justify-center rounded'>CN</button>
                        <button className='text-light bg-dark p-1 flex items-center justify-center rounded'>EN</button>
                        <button className='text-light bg-dark p-1 flex items-center justify-center rounded'>NL</button>
                        <button className='text-light bg-dark p-1 flex items-center justify-center rounded'>SK</button>
                        <button className='text-light bg-dark p-1 flex items-center justify-center rounded'>PL</button>
                        <button className='text-light bg-dark p-1 flex items-center justify-center rounded'>DE</button>
                    </div>
                    <button className='text-light p-1 rounded-sm px-2 bg-light ml-2 text-primary nsm:text-sm'>
                        Logout
                    </button>
                </div>
            </div>
        </>
    );
}

export default Header;
