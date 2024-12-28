import React, { useContext } from 'react';
import { Context } from '../';

const Auth = () => {
    const { isAuthModalVisible, toggleAuthModal, toggleLoginModal, toggleRegisterModal } = useContext(Context);

    if (!isAuthModalVisible) {
        return null;
    }      
    
    return (
        <div className={`${toggleAuthModal} auth-box absolute top-10 bg-primary p-2 rounded-lg text-light flex items-start gap-px justify-center flex-col nsm:flex-row nsm:w-fit nsm:top-1 nsm:border nsm:border-secondary`}>
            <div className='input flex items-center mb-2 nsm:mr-3'>
                <input
                    type="radio"
                    name="auth"
                    id="login"
                    className='radio-input cursor-pointer'
                    title='login'
                    onClick={toggleLoginModal}
                />
                <label
                 htmlFor="login"
                  className="ml-2 cursor-pointer"
                  onClick={toggleLoginModal}
                  >Login</label>
            </div>
            <div className='input flex items-center'>
                <input
                    type="radio"
                    name="auth"
                    id="register"
                    className='radio-input cursor-pointer'
                    title='register'
                    onClick={toggleRegisterModal}
                />
                <label
                 htmlFor="register"
                  className="ml-2 cursor-pointer"
                  onClick={toggleRegisterModal}
                  >Register</label>
            </div>
        </div>
    );
}

export default Auth;
