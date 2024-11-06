import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import FullScreenIcon from '../../../assets/images/full-screen.png'
import {Footer, Topbar, SectionBar, ButtonBar, PopUp} from '../../';
import React, { useState } from 'react';
// import { useTabs } from '@material-tailwind/react';

const Layout = () => {

  const path = useLocation().pathname;
  // console.log(`I am Path ${path}`)
  const color = 'light';
  const title = 'DESIGN YOUR OWN SUITS';
  const text = 'Go Full Screen';
  const bg = 'secondary';
  const icon = FullScreenIcon;

  const [selectedCard, setSelectedCard] = useState(null);
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  // const [download, setDownload]   = useState(false)

  const navigate = useNavigate();

  const handleDownload = () => {
    setError('Your Design Downloaded');
    setShowPopup(true)
    setTimeout(() => {
      setShowPopup(false)
    }, 1000);
}

  const selectCard = (card) => {
    setSelectedCard(card);
    setError('');
    setShowPopup(false);
  };

  const handleNextClick = () => {
    if (path === '/design') {
      if (!selectedCard) {
        setError('Please select a Card');
        setShowPopup(true);

        setTimeout(() => {
          setShowPopup(false);
        }, 1000);
      } else {
        path === '/design' ? navigate('/colors') : ''
      }
    } 

    path === '/colors' ? navigate('/options') : ''
    path === '/options' ? navigate('/personalizations') : ''
    path === '/personalizations' ? navigate('/submit') : ''
  };

  // Goto Previous Page 
  const handlePrevClick = () => {
    path === '/design' ? navigate('/') : ''
    path === '/colors' ? navigate('/design') : ''
    path === '/options' ? navigate('/colors') : ''
    path === '/personalizations' ? navigate('/options') : ''
    path === '/submit' ? navigate('/personalizations') : ''

  };

  return (
    <>
      <Topbar
        textColor={color}
        bgColor={bg}
        siteTitle={title}
        iconText={text}
        icon={icon}
      />
      <SectionBar />
      {showPopup && <PopUp message={error} />}
      <ButtonBar onNext={handleNextClick} onPrev={handlePrevClick} />
      <Outlet context={{ selectedCard, selectCard, handleDownload }} />
      <Footer paraStyle="hidden" />
    </>
  );
};

export default Layout;
