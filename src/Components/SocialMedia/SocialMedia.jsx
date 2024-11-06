import React from 'react'
import './Style.css'
import whatsapp from '../../assets/images/whastapp.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
function SocialMedia() {
    return (
        <>
            <div className="socialMedia-bar right-2 nsm:hidden">
                
                <div className="icon-holder h-10 w-10 cursor-pointer">
                    <a href="https://wa.me/message/SBDCDBETODETG1">
                    <img src={whatsapp} alt={whatsapp} className='w-full h-full object-cover' />
                    </a>
                </div>
                <div className="icon-holder h-10 w-10 cursor-pointer">
                    <a href="https://www.instagram.com/byt3blitz/">
                    <img src={instagram} alt={instagram} className='w-full h-full object-cover' />
                    </a>
                </div>
                <div className="icon-holder h-10 w-10 cursor-pointer">
                    <a href="https://www.facebook.com/yasirmehboob.yasir">
                    <img src={facebook} alt={facebook} className='w-full h-full object-cover' />
                    </a>
                </div>

            </div>
        </>
    )
}

export default SocialMedia
