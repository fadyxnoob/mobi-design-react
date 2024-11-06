import React, { useState } from 'react';
import {CustomRadioInput} from '../../';

const FittingAndSizeForm = () => {
    const [fitting, setFitting] = useState('men');

    const handleFitting = (e) => {
        setFitting(e.target.value);
    };

    return (
        <div className='labelBox rounded bg-secondary text-light absolute right-64 top-0 p-3 w-80 max-h-600 overflow-auto scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-secondary scrollbar-track-ButtonBG'>
            <h3 className="text-lg font-semibold">CHOOSE FITTING & SIZE</h3>

            {/* Fitting Section */}
            <div className="radio-container mt-2">
                <h3 className="text-base font-semibold mt-5 mb-3">Fitting</h3>
                <div className="radio-boxes flex justify-around">
                    <CustomRadioInput
                        label='Men'
                        name='fitting'
                        value='men'
                        checked={fitting === 'men'} 
                        onChange={handleFitting}
                        id='men'
                        classes='cursor-pointer'
                    />
                    <CustomRadioInput
                        label='Women'
                        name='fitting'
                        value='women'
                        checked={fitting === 'women'} 
                        onChange={handleFitting}
                        id='women'
                        classes='cursor-pointer'
                    />
                </div>
                <span className="w-full border-b border-light block mt-2"></span>
            </div>

            {/* Size Section */}
            {fitting === 'men' ? (
                <div className="radio-container mt-2 w-full">
                    <h3 className="text-base font-semibold mb-3">Size</h3>
                    <div className="menRadio-boxes flex flex-col gap-2">
                        <CustomRadioInput label='Custom Size (+$95.00)' size={false} value='loadForm' name='size' id='loadForm' classes='cursor-pointer' />
                        <CustomRadioInput label='32' size={false} value='32' classes='mt-3 cursor-pointer' name='size' id='32' />
                        <CustomRadioInput label='34' size={false} value='34' classes='mt-3 cursor-pointer' name='size' id='34' />
                        <CustomRadioInput label='36' size={false} value='36' classes='mt-3 cursor-pointer' name='size' id='36' />
                        <CustomRadioInput label='38' size={false} value='38' classes='mt-3 cursor-pointer' name='size' id='38' />
                        <CustomRadioInput label='40' size={false} value='40' classes='mt-3 cursor-pointer' name='size' id='40' />
                        <CustomRadioInput label='42' size={false} value='42' classes='mt-3 cursor-pointer' name='size' id='42' />
                        <CustomRadioInput label='44' size={false} value='44' classes='mt-3 cursor-pointer' name='size' id='44' />
                        <CustomRadioInput label='46' size={false} value='46' classes='mt-3 cursor-pointer' name='size' id='46' />
                        <CustomRadioInput label='48' size={false} value='48' classes='mt-3 cursor-pointer' name='size' id='48' />
                        <CustomRadioInput label='50' size={false} value='50' classes='mt-3 cursor-pointer' name='size' id='50' />
                    </div>
                </div>
            ) : (
                <div className="radio-container mt-2 w-full">
                    <h3 className="text-base font-semibold mb-3">Size</h3>
                    <div className="womenRadio-boxes flex flex-col gap-2">
                        <CustomRadioInput label='Custom Size (+$95.00)' size={false} value='loadForm' name='size' id='loadForm' classes='cursor-pointer' />
                        <CustomRadioInput label='6' size={false} value='6' classes='mt-3 cursor-pointer' name='size' id='6' />
                        <CustomRadioInput label='8' size={false} value='8' classes='mt-3 cursor-pointer' name='size' id='8' />
                        <CustomRadioInput label='10' size={false} value='10' classes='mt-3 cursor-pointer' name='size' id='10' />
                        <CustomRadioInput label='12' size={false} value='12' classes='mt-3 cursor-pointer' name='size' id='12' />
                        <CustomRadioInput label='14' size={false} value='14' classes='mt-3 cursor-pointer' name='size' id='14' />
                        <CustomRadioInput label='16' size={false} value='16' classes='mt-3 cursor-pointer' name='size' id='16' />
                        <CustomRadioInput label='18' size={false} value='18' classes='mt-3 cursor-pointer' name='size' id='18' />
                        <CustomRadioInput label='20' size={false} value='20' classes='mt-3 cursor-pointer' name='size' id='20' />
                    </div>
                </div>
            )}
        </div>
    );
}
export default FittingAndSizeForm;
