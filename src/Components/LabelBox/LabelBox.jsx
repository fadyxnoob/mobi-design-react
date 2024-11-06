import React from 'react';

const LabelBox = ({ inputs, isOpen, label, type, typeDisplay, value = '', onInputChange, selectedOptions }) => {

    const firstLatterCapital = (label) => {
        return label
            .split(' ')
            .map(word =>
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join(' ');
    }

    return (
        <div
            className={`labelBox rounded bg-secondary text-light absolute right-64 nsm:right-60 top-0 p-3 w-60
            ${isOpen ? 'block' : 'hidden'}`}
        >
            <h6 className='font-semibold nsm:text-center'>{label ? `Choose ${firstLatterCapital(label)}` : 'Choose an Option'}</h6>
            <div className={`custom-radio-boxes mt-2 px-2 text-sm flex flex-col justify-center w-full`}>
                {inputs.map((input, index) => (
                    <div className={`custom-radio-box flex gap-2 mt-1`} key={index}>
                        
                        <input
                            type={type}
                            id={input}
                            className={`${typeDisplay} radio-input cursor-pointer`}
                            name={input}
                            value={input}
                            checked={selectedOptions.includes(input)}
                            onChange={() => onInputChange(input)}
                        />
                        <label htmlFor={input} className='cursor-pointer'>{input}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LabelBox;
