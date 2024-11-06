import React from 'react';

const Input = ({ labelStyle, flex = 'block', label, id, type, style, placeholder, lableColor, display = 'block', inputName, isDisabled, value = "", onChange }) => {
  return (
    <div className={`input-group mb-4 w-full ${flex}`}>
      {label &&
        <label
          htmlFor={id}
          className={`${display} mb-2 text-${lableColor} ${labelStyle}`}
        >
          {label}
        </label>}

      <input
        type={type}
        id={id}
        className={`${style}`}
        placeholder={placeholder}
        {...inputName}
        disabled={isDisabled}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
