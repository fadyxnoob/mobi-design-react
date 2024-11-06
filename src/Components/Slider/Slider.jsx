import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import React, { useState } from 'react'
import './Slider.css'

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
            <div className="carousel nsm:relative nsm:top-10 nsm:left-10">
                <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
                {data.map((item, idx) => {
                    return (
                        <Link to='/design'>
                            <img
                                src={item.url}
                                alt={item.alt}
                                key={idx}
                                className={slide === idx ? "slide" : "slide slide-hidden"}
                            />
                        </Link>
                    );
                })}
                <BsArrowRightCircleFill
                    onClick={nextSlide}
                    className="arrow arrow-right"
                />
                <span className="indicators">
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
