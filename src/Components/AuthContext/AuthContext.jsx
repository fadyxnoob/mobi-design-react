import React, { createContext, useState } from 'react';

export const Context = createContext();

export const Provider = ({ children }) => {

    const [isAuthModalVisible, setAuthModalVisible] = useState(false);
    const [isLoginModelVisible, setLoginModelVisible] = useState(false);
    const [isRegisterModelVisible, setRegisterModelVisible] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleAuthModal = () => {

        setAuthModalVisible(prev => !prev);

        if (!isAuthModalVisible) {
            setLoginModelVisible(false);
            setRegisterModelVisible(false);
        }
    };

    const toggleLoginModal = () => {
        setLoginModelVisible(true);
        setRegisterModelVisible(false);
    };

    const toggleRegisterModal = () => {
        setRegisterModelVisible(true);
        setLoginModelVisible(false);
    };

    const closeModelBox = () => {
        setLoginModelVisible(false);
        setRegisterModelVisible(false);
    }

    const handleMobileMenu = () => {
        setIsMobileMenuOpen((p) => !p)
    }
    return (
        <Context.Provider value={{
            isAuthModalVisible,
            toggleAuthModal,
            isLoginModelVisible,
            toggleLoginModal,
            isRegisterModelVisible,
            toggleRegisterModal,
            closeModelBox,
            isMobileMenuOpen,
            handleMobileMenu
        }}>
            {children}
        </Context.Provider>
    );

};
