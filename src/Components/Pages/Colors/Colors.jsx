import React, { useState } from 'react';
import {Reset, SVG} from '../../';

const Colors = () => {
  const [baseColor, setBaseColor] = useState(localStorage.getItem('baseColor') || '');
  const [colorOne, setColorOne] = useState(localStorage.getItem('colorOne') || '');
  const [colorTwo, setColorTwo] = useState(localStorage.getItem('colorTwo') || '');
  const [logosColor, setLogosColor] = useState(localStorage.getItem('logosColors') || '');
  const [riderNameColor, setRiderNameColor] = useState(localStorage.getItem('riderNameColor') || '');
  const [riderNumberColor, setRiderNumberColor] = useState(localStorage.getItem('riderNumberColor') || '');

  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'baseColor':
        setBaseColor(value);
        localStorage.setItem('baseColor', value);
        break;
      case 'colorOne':
        setColorOne(value);
        localStorage.setItem('colorOne', value);
        break;
      case 'colorTwo':
        setColorTwo(value);
        localStorage.setItem('colorTwo', value);
        break;
      case 'logosColor':
        setLogosColor(value);
        localStorage.setItem('logosColors', value);
        break;
      case 'riderNameColor':
        setRiderNameColor(value);
        localStorage.setItem('riderNameColor', value);
        break;
      case 'riderNumberColor':
        setRiderNumberColor(value);
        localStorage.setItem('riderNumberColor', value);
        break;
      default:
        break;
    }
  };


  return (
    <div className='h-screen w-full bg-primary nsm:h-full nsm:pb-10'>
      <div className="card-holder flex items-start justify-between w-full nsm:flex-col">

        <SVG
          baseColor={baseColor}
          colorOne={colorOne}
          colorTwo={colorTwo}
          logosColor={logosColor}
          riderNameColor={riderNameColor}
          riderNumberColor={riderNumberColor}
        />

        <div className="h-full w-1/2 flex justify-end items-end flex-col gap-8 nsm:w-full nsm:items-center nsm:flex-row nsm:p-2">
          {/* Color inputs */}
          <div className="inputFields w-56 nsm:w-1/2 h-fit pb-4 relative bg-ButtonBG right-20 nsm:static">
            <h1 className='bg-secondary w-full text-center p-2 text-light font-semibold'>Choose Colors</h1>
            <div className="w-4/6 mx-auto mt-6 flex flex-col gap-2 ">

              <div className="w-full flex gap-2">
                <input
                  type="color"
                  value={baseColor || "#CE936C"}
                  onChange={handleChange}
                  id='baseColor'
                  className="size-6"
                />
                <label className="text-light text-medium">Base Color</label>
              </div>

              <div className="w-full flex gap-2 mt-2">
                <input
                  type="color"
                  value={colorOne || "#CE936C"}
                  onChange={handleChange}
                  id='colorOne'
                  className="size-6"
                />
                <label className="text-light text-medium">Color 1</label>
              </div>

              <div className="w-full flex gap-2 mt-2">
                <input
                  type="color"
                  value={colorTwo || "#CE936C"}
                  onChange={handleChange}
                  id='colorTwo'
                  className="size-6"
                />
                <label className="text-light text-medium">Color 2</label>
              </div>
            </div>
          </div>

          <div className="inputFields w-56 nsm:w-1/2 h-fit pb-4 relative bg-ButtonBG right-20 nsm:static">
            <h1 className='bg-secondary w-full text-center p-2 text-light font-semibold'> Logo & Rider Colors</h1>
            <div className="w-4/6 mx-auto mt-6 flex flex-col gap-2">

              <div className="w-full flex gap-2">
                <input
                  type="color"
                  value={logosColor || "#CE936C"}
                  onChange={handleChange}
                  id='logosColor'
                  className="size-6"
                />
                <label className="text-light text-medium">Logo Color</label>
              </div>

              <div className="w-full flex gap-2 mt-2">
                <input
                  type="color"
                  value={riderNameColor || "#CE936C"}
                  onChange={handleChange}
                  id='riderNameColor'
                  className="size-6"
                />
                <label className="text-light text-medium">Rider Name</label>
              </div>

              <div className="w-full flex gap-2 mt-2">
                <input
                  type="color"
                  value={riderNumberColor || "#CE936C"}
                  onChange={handleChange}
                  id='riderNumberColor'
                  className="size-6"
                />
                <label className="text-light text-medium">Rider Number</label>
              </div>
            </div>
          </div>

          <div className="relative nsm:hidden">
            <Reset positionX='right-36' positionY='top-0' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colors;
