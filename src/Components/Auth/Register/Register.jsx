import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../AuthContext/AuthContext';
import { Input } from '../../../Components';
import { FiX } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import Alert from '../../Alert/Alert';

const Register = () => {
    const { isRegisterModelVisible, closeModelBox } = useContext(Context);
    const [error, setErrors] = useState(null);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            setErrors({ type: 'error', message: 'Please fill all.' });
        }
    }, [errors]);
    const onSubmit = (data) => {
        console.log('Form Submitted:', data);
        reset()
        setErrors({ type: 'success', message: 'Login successfully!' });
    };
    const inputStyle = ['bg-primary', 'text-light', 'p-4', 'rounded', 'h-10', 'w-full', 'block', 'border-0', 'outline-0', 'focus:border focus:bg-secondary', 'focus:placeholder-light'].join(' ');

    if (!isRegisterModelVisible) {
        return;
    }
    return (
        <>
            {error && <Alert type={error.type} message={error.message} />}
            <div className={`signUp-card no-scrollbar bg-secondary h-3/4 py-2 w-6/12 flex items-center  gap-2 p-5 rounded flex-col nsm:w-10/12 nsm:left-10`}>
                <div className="absolute top-2 right-2 cursor-pointer text-light" onClick={closeModelBox}>
                    <FiX size={30} />
                </div>
                <h1 className='text-3xl text-start text-light font-bold'>User Registration</h1>
                <form onSubmit={handleSubmit(onSubmit)} noValidate className='w-full'>
                    <div className="flex gap-2 w-full">
                        <Input
                            id="name"
                            type="text"
                            label="Name"
                            placeholder="Enter your name..."
                            style={inputStyle}
                            labelColor="light"
                            defaultValue=""
                            inputName={register("name",
                                {
                                    required: {
                                        value: true,
                                        message: 'name is required'
                                    }
                                }
                            )}
                        />
                        <Input
                            type="text"
                            placeholder="Enter your username..."
                            id='username'
                            label='Username'
                            labelColor="light"
                            style={inputStyle}
                            defaultValue=""
                            inputName={register("username",
                                {
                                    required: {
                                        value: true,
                                        message: 'username is required'
                                    }
                                }
                            )}
                        />
                    </div>

                    <div className="flex gap-2 w-full">
                        <Input
                            id="password"
                            type="password"
                            label="Password"
                            placeholder="Enter your password..."
                            style={inputStyle}
                            labelColor="light"
                            defaultValue=""
                            inputName={register("password",
                                {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    }
                                }
                            )}
                        />
                        <Input
                            type="password"
                            placeholder="Confirm your password..."
                            id='password'
                            label='Confirm Password'
                            labelColor="light"
                            style={inputStyle}
                            defaultValue=""
                            inputName={register("confirmPassword",
                                {
                                    required: {
                                        value: true,
                                        message: 'Confirm password is required'
                                    }
                                }
                            )}
                        />
                    </div>

                    <div className="flex gap-2 w-full">
                        <Input
                            id="phone"
                            type="tel"
                            label="Phone"
                            placeholder="Enter your phone number..."
                            style={inputStyle}
                            labelColor="light"
                            defaultValue=""
                            inputName={register("phone",
                                {
                                    required: {
                                        value: true,
                                        message: 'phone number is required'
                                    }
                                }
                            )}
                        />
                        <Input
                            type="email"
                            placeholder="Enter your email..."
                            id='email'
                            label='Email'
                            labelColor="light"
                            style={inputStyle}
                            defaultValue=""
                            inputName={register("email",
                                {
                                    required: {
                                        value: true,
                                        message: 'email is required'
                                    },
                                    pattern: {
                                        value:
                                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: "invalid email format"
                                    }
                                }
                            )}
                        />
                    </div>

                    <div className="flex gap-2 w-full">
                        <Input
                            id="country"
                            type="text"
                            label="Country"
                            placeholder="Enter your country..."
                            style={inputStyle}
                            labelColor="light"
                            defaultValue=""
                            inputName={register("country",
                                {
                                    required: {
                                        value: true,
                                        message: 'Country is required'
                                    }
                                }
                            )}
                        />
                        <Input
                            type="text"
                            placeholder="Enter your city..."
                            id='city'
                            label='City'
                            labelColor="light"
                            style={inputStyle}
                            defaultValue=""
                            inputName={register("city",
                                {
                                    required: {
                                        value: true,
                                        message: 'City is required'
                                    }
                                }
                            )}
                        />
                    </div>

                    <div className="flex gap-2 w-full">
                        <Input
                            id="address"
                            type="text"
                            label="Street and House No"
                            placeholder="Enter complete address..."
                            style={inputStyle}
                            labelColor="light"
                            defaultValue=""
                            inputName={register("address",
                                {
                                    required: {
                                        value: true,
                                        message: 'address is required'
                                    }
                                }
                            )}
                        />
                        <Input
                            type="text"
                            placeholder="Enter Zipcode..."
                            id='zipcode'
                            label='Zip Code'
                            labelColor="light"
                            style={inputStyle}
                            defaultValue=""
                            inputName={register("zipcode",
                                {
                                    required: {
                                        value: true,
                                        message: 'zipcode is required'
                                    }
                                }
                            )}
                        />
                    </div>

                    <h2 className='text-xl mt-1 mb-2 text-start text-light font-medium'>Billing Information</h2>
                    <div className={`flex items-center justify-left w-full font-medium text-light`}>
                        <div className='input flex items-center w-full mb-2'>
                            <input
                                type="radio"
                                name="custom-radio-btn"
                                id="individual"
                                className='radio-input cursor-pointer'
                                title='Individual'
                                checked
                            />
                            <label
                                htmlFor="individual"
                                className="ml-2 cursor-pointer"
                            >Individual</label>
                        </div>
                        <div className='input flex items-center w-full'>
                            <input
                                type="radio"
                                name="custom-radio-btn"
                                id="company"
                                className='radio-input cursor-pointer'
                                title='Company'
                            />
                            <label
                                htmlFor="company"
                                className="ml-2 cursor-pointer"
                            >Company</label>
                        </div>
                    </div>
                    <div className='input flex items-center mb-2 w-full text-light'>
                        <input
                            type="checkbox"
                            name="billingCheckBox"
                            id="billingCheckBox"
                            className='radio-input cursor-pointer size-4'
                            title='Individual'
                        />
                        <label
                            htmlFor="billingCheckBox"
                            className="ml-2 cursor-pointer"
                        >Delivery and Billing addresses vary</label>
                    </div>
                    <div className='input flex items-center mb-2 w-full text-light'>
                        <input
                            type="checkbox"
                            name="termsCheckBox"
                            id="termsCheckBox"
                            className='radio-input cursor-pointer size-4'
                            title='Individual'
                        />
                        <label
                            htmlFor="termsCheckBox"
                            className="ml-2"
                        >I agree with <span className='text-blue cursor-pointer'>Terms & Conditions</span></label>
                    </div>
                    <button className='p-2 w-full text-light bg-primary rounded hover:bg-secondary hover:border'>Register</button>
                </form>
            </div>
        </>
    );
}

export default Register;

