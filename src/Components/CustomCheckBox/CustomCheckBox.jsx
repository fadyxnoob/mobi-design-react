import React from 'react';

const CustomCheckBox = ({onClick, id}) => {
    console.log(onClick)
  return (
   <>
    <div className='flex gap-2 items-center relative bottom-3 left-1 '>
      <input type="checkbox" className='size-4 radio-input' id={id} onClick={onClick}/>
      <label htmlFor={id} className='text-sm cursor-pointer'>Do Not Print Suit Number</label>
    </div>
   </>
  );
}

export default CustomCheckBox;
