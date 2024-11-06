import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

const ButtonBar = ({ onNext, onPrev }) => {
    const location = useLocation();
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);
    // const isActive = (path) => location.pathname === path;

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 600);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    let sectionName;

    if (location.pathname === '/design') {
        sectionName = isSmallScreen ? 'Choose Your Design' : 'Choose Your Design';
    } else if (location.pathname === '/colors') {
        sectionName = isSmallScreen ? 'Choose Colors' : 'Choose Your Design -> Choose Colors';
    } else if (location.pathname === '/options') {
        sectionName = isSmallScreen ? 'Choose Options' : 'Choose Your Design -> Choose Colors -> Choose Options';
    } else if (location.pathname === '/personalizations') {
        sectionName = isSmallScreen ? ' Personalizations' : 'Choose Your Design -> Choose Colors -> Choose Options -> Choose Personalizations';
    } else if (location.pathname === '/submit') {
        sectionName = isSmallScreen ? 'Submit Your Design' : 'Submit Your Design';
    }

    return (

        <div className="h-36 bg-primary nsm:pt-2">
            <div
                className='flex w-full h-12 items-center justify-between text-primary bg-secondary relative top-12'
            >
                <button
                    className='bg-ButtonBG w-24 h-full text-2xl hover:bg-primary hover:text-light'
                    onClick={onPrev}
                >Back</button>

                <h1
                    className={`pageName text-center text-2xl font-medium text-light `}>
                    {sectionName}
                </h1>

                <button
                    className='bg-ButtonBG w-24 h-full text-2xl hover:bg-primary hover:text-light'
                    onClick={onNext}
                >Next</button>
            </div>
        </div>
    );
}

export default ButtonBar;
