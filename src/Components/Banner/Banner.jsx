import { Header, Slider, SliderData, SocialMedia, Auth, Login, Register } from '../../Components'
import React from 'react'
const Banner = () => {
    return (
        <>
            <div className='bg-bannerBG w-full h-screen p-0 m-0 bg-cover bg-no-repeat bg-bottom bg-auto relative top-0'>
                <Header />
                <div className='flex h-full nsm:flex-col'>

                    <div className="w-6/12 flex
                    items-center pl-10 nsm:hidden">

                        <div>
                            <h1 className='text-light text-7xl font-black leading-2'>
                                MOBI <br />
                                ENTERPRISES
                            </h1>
                            <p className='text-light text-xl leading-6'>
                                Elevate your style with personalized leather <br />
                                creations as unique as you.
                            </p>
                            <div>
                                <button className="mt-5 ml-5 bg-gradient-to-r from-primary to-primary bg-[length:200%_100%] bg-left hover:bg-right hover:from-secondary hover:to-primary text-light font-bold py-2 px-4 rounded text-xl transition-all duration-500">
                                    Get Started
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="w-6/12 flex items-center justify-center nsm:hidden">
                        <Slider data={SliderData} />
                    </div>

                    <div className="hidden nsm:flex items-center justify-center boder nsm:relative nsm:top-40">
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
