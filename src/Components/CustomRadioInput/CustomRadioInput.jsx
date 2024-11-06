import React from 'react';

const CustomRadioInput = ({id='logos', label, name, onChange, value, checked, classes, size = true}) => {

    return (
        <div className='w-fit flex items-center gap-1 size-4'>
            <input
                type="radio"
                id= {id}
                className={`accent-red ${size? 'size-full' : ''} ${classes}`}
                name={name}
                onChange={onChange}
                value={value}
                checked={checked}
            />
            <label
                className={classes}
                htmlFor={id}>
                {label}
            </label>
        </div>
    );
}

export default CustomRadioInput;
