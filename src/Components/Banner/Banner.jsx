import { Header, Slider, SliderData, SocialMedia, Auth, Login, Register } from '../../Components'
import React from 'react'
const Banner = () => {
    return (
        <>
            <div
                className='bg-bannerBG w-full bg-cover bg-no-repeat bg-bottom relative min-h-screen'
            >
                <Header />
                <div className='size-full flex flex-col md:flex-row'>
                    <div
                        className="w-full md:w-1/2 md:flex items-center md:pl-10 px-5"
                    >
                        <div>
                            <h1 className='hidden md:block text-light text-7xl font-black leading-2 text-center md:text-start'>
                                MOBI <br />
                                ENTERPRISES
                            </h1>
                            <h1 className='md:hidden text-light font-medium text-3xl text-right mt-5'>
                                MOBI ENTERPRISES
                            </h1>
                            <p className='text-light text-xl leading-6 text-right md:text-start'>
                                Elevate your style with personalized leather <br />
                                creations as unique as you.
                            </p>
                            <div className='text-center'>
                                <button className="mt-5 md:ml-5 bg-gradient-to-r from-primary to-primary bg-[length:200%_100%] bg-left hover:bg-right hover:from-secondary hover:to-primary text-light font-bold py-2 px-4 rounded text-xl transition-all duration-500 ms-auto">
                                    Get Started
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="w-full flex items-center justify-center">
                        <Slider data={SliderData} />
                    </div>

                    <div className="hidden nsm:flex items-center justify-center border nsm:relative nsm:top-40">
                        <Slider data={SliderData} />
                    </div>

                </div>
                <Login />
                <SocialMedia />
                <Auth />
                <Register />
            </div>
        </>
    )
}

export default Banner
