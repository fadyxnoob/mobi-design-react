import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {SVG, Reset, SendToFriend, SubmitYourDesign} from '../../';

const Finish = () => {
    const [openSendToFriend, setOpenSendToFriend] = useState(null);
    const [submitDesignOpen, setSubmitDesignOpen] = useState(null)
    const [totalPrice, setTotalPrice] = useState(500);
    const [showPopup, setShowPopup] = useState(false);

    const { handleDownload } = useOutletContext();

    const handleDownloadClick = (label) => {
        if (label === 'DOWNLOAD DESIGN') {
            handleDownload();
        }
        setOpenSendToFriend(null)
        setSubmitDesignOpen(null)
        setShowPopup(true)
        setTimeout(() => {
            setShowPopup(false)
        }, 100);
    };

    const handleOpenSendToFriend = () => {
        setOpenSendToFriend((prev) => !prev)
        setSelectedLabel(null);
        setSubmitDesignOpen(null)
    };
    const handleOpenSubmitYourDesign = () => {
        setSubmitDesignOpen((prev) => !prev)
        setSelectedLabel(null);
        setOpenSendToFriend(null)
    };

    return (
        <div className='h-screen w-full bg-primary nsm:h-full nsm:pb-10'>
            <div className="card-holder flex items-start justify-between w-full nsm:flex-col">
                <SVG />
                <div className="h-full w-1/2 flex justify-end items-end flex-col gap-8 nsm:items-center nsm:justify-center nsm:w-full">
                    <form action="">
                        <div className="inputFields w-60 h-fit pb-4 relative right-20 nsm:static">
                            <div
                                onClick={handleOpenSendToFriend}
                                className={`w-full h-11 text-light mt-2 flex items-center pl-10 rounded-sm z-10  cursor-pointer ${!openSendToFriend ? 'bg-secondary' : 'bg-primary border border-secondary'}`}
                            >
                                SEND TO FRIEND
                            </div>
                            {openSendToFriend && <SendToFriend />}
                            <div
                                onClick={() => handleDownloadClick('DOWNLOAD DESIGN')}
                                className={`w-full h-11 text-light mt-2 flex items-center pl-10 rounded-sm z-10  cursor-pointer ${!showPopup ? 'bg-secondary' : 'bg-primary border border-secondary'}`}

                            >
                               DOWNLOAD DESIGN
                            </div>

                            <div
                                onClick={handleOpenSubmitYourDesign}
                                className={`w-full h-11 text-light mt-2 flex items-center pl-10 rounded-sm z-10  cursor-pointer ${!submitDesignOpen ? 'bg-secondary' : 'bg-primary border border-secondary'}`}
                            >
                               SUBMIT YOUR DESIGN
                            </div>
                            {submitDesignOpen && <SubmitYourDesign />}
                            <div className="w-full h-11 text-light mt-2 flex items-center pl-10 rounded-sm z-10 bg-secondary">
                                TOTAL PRICE: ${totalPrice}
                            </div>
                        </div>
                    </form>


                    <div className="relative nsm:hidden">
                        <Reset positionX='right-36' positionY='top-0' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Finish;
