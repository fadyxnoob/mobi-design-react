import React from 'react';
import { useOutletContext } from 'react-router-dom';
import {Card} from '../../'
import slider1 from '../../../assets/images/slider1.png'
import slider2 from '../../../assets/images/slider2.png'
import slider3 from '../../../assets/images/slider3.png'
import slider4 from '../../../assets/images/slider4.png'
const Design = () => {
  const { selectedCard, selectCard } = useOutletContext(); 

  return (
    <>
      <div className='w-full bg-primary'>
        <div className="card-holder flex items-center justify-center w-full h-screen gap-5 nsm:h-full nsm:flex-col nsm:pb-5">
          <Card
            image={slider1} ALT={slider1}
            onClick={() => selectCard('slider1.png')}
            isSelected={selectedCard === slider1}
          />
          <Card
            image={slider2} ALT={slider2}
            onClick={() => selectCard('slider2.png')}
            isSelected={selectedCard === slider2}
          />
          <Card
            image={slider3} ALT={slider3}
            onClick={() => selectCard('slider3.png')}
            isSelected={selectedCard === slider3}
          />
          <Card
            image={slider4} ALT={slider4}
            onClick={() => selectCard('slider4.png')}
            isSelected={selectedCard === slider4}
          />
        </div>
      </div>
    </>
  );
};

export default Design;
