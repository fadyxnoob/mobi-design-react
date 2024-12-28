import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { SVG, Reset, SendToFriend, SubmitYourDesign } from '../../';

const Finish = () => {
    const [openSendToFriend, setOpenSendToFriend] = useState(false);
    const [submitDesignOpen, setSubmitDesignOpen] = useState(false)
    const [totalPrice, setTotalPrice] = useState(500);
    const [showPopup, setShowPopup] = useState(false);

    const { handleDownload } = useOutletContext();
    const handleDownloadClick = (label) => {
        if (label === 'DOWNLOAD DESIGN') {
            handleDownload();
        }
        setOpenSendToFriend(false)
        setSubmitDesignOpen(false)
        setShowPopup(true)
        setTimeout(() => {
            setShowPopup(false)
        }, 100);
    };

    const handleOpenSendToFriend = () => {
        setOpenSendToFriend((prev) => !prev)
        setSubmitDesignOpen(false)
    };

    const handleOpenSubmitYourDesign = () => {
        setSubmitDesignOpen((prev) => !prev)
        setOpenSendToFriend(false)
    };

    return (
        <div className='h-screen w-full bg-primary nsm:h-full nsm:pb-10'>
            <div className="card-holder flex items-start justify-between w-full flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                    <SVG />
                </div>
                <div className="h-full md:w-1/2 flex md:justify-end md:items-end flex-col gap-8 items-center justify-center w-full relative md:top-12">
                    <div className="inputFields w-60 h-fit pb-4 relative md:right-20 ">
                        <div
                            onClick={handleOpenSendToFriend}
                            className={`w-full h-11 text-light mt-2 flex items-center pl-10 rounded-sm z-10  cursor-pointer ${!openSendToFriend ? 'bg-secondary' : 'bg-primary border border-secondary'}`}
                        >
                            SEND TO FRIEND
                        </div>
                        {openSendToFriend && <SendToFriend setOpenSendToFriend={setOpenSendToFriend} />}
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
                        {submitDesignOpen && <SubmitYourDesign setSubmitDesignOpen={setSubmitDesignOpen} />}
                        <div className="w-full h-11 text-light mt-2 flex items-center pl-10 rounded-sm z-10 bg-secondary">
                            TOTAL PRICE: ${totalPrice}
                        </div>
                    </div>

                    <div className="relative hidden md:block">
                        <Reset positionX='right-36' positionY='top-0' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Finish;
