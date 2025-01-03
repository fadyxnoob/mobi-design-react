import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import React, { useState } from 'react'
import './Slider.css'
import { Carousel } from "@material-tailwind/react";

function Slider({ data }) {
    const [slide, setSlide] = useState(0);
    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };

    return (
        <>
            <div className="carousel relative top-10 left-0 flex items-center justify-center m-0 w-full md:w-[70%] overflow-hidden">
                <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
                {data.map((item, idx) => {
                    return (
                       <div className="h-screen" key={idx}>
                         <Link to='/design' >
                            <img
                                src={item.url}
                                alt={item.alt}
                                className={slide === idx ? "slide mx-auto" : "slide slide-hidden"}
                            />
                        </Link>
                       </div>
                    );
                })}
                <BsArrowRightCircleFill
                    onClick={nextSlide}
                    className="arrow arrow-right"
                />
                <span className="flex absolute bottom-20 p-1">
                    {data.map((_, idx) => {
                        return (
                            <button
                                key={idx}
                                className={
                                    slide === idx ? "indicator" : "indicator indicator-inactive"
                                }
                                onClick={() => setSlide(idx)}
                            ></button>
                        );
                    })}
                </span>
            </div>
        </>
    )
}


export default Slider;
