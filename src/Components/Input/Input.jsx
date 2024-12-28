import React, { useId } from 'react';

const Input = (
  { labelStyle,
    flex = 'block',
    label,
    type,
    style,
    placeholder,
    labelColor,
    display = 'block',
    inputName,
    isDisabled,
    // onChange,
    ...props
  }, ref) => {
  const id = useId();

  return (
    <div
      className={`input-group w-full ${flex}`
      }>
      {label &&
        <label
          htmlFor={id}
          className={`${display} mb-2 text-${labelColor} ${labelStyle}`}
        >
          {label}
        </label>}

      <input
        {...props}
        type={type}
        id={id}
        className={`${style}`}
        placeholder={placeholder}
        {...inputName}
        disabled={isDisabled}
        // onChange={onChange}
        ref={ref}
      />
    </div>
  );
}

export default React.forwardRef(Input);
