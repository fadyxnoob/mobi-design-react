import React, { useContext } from 'react';
import { Context } from '../../AuthContext/AuthContext';
import {Input} from '../../../Components';
import { FiX } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
    

const Register = () => {
    const { isRegisterModelVisible, closeModelBox } = useContext(Context);

    if (!isRegisterModelVisible) {
        return null;
    }

    const inputStyle = ['bg-primary', 'text-light', 'p-4', 'rounded', 'h-10', 'w-full', 'block', 'border-0', 'outline-0', 'focus:border focus:bg-secondary', 'focus:placeholder-light'].join(' ');

    const form = useForm();
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState

    const onSubmit = (data) => {
        console.log('submitted', data);
    };

    return (
        <div className={`signUp-card no-scrollbar bg-secondary h-3/4 py-2 w-6/12 flex items-center  gap-2 p-5 rounded flex-col nsm:w-10/12 nsm:left-10`}>
            <div className="absolute top-2 right-2 cursor-pointer text-light" onClick={closeModelBox}>
                <FiX size={30} />
            </div>
            <h1 className='text-3xl text-start text-light font-bold'>User Registeration</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate className='w-full'>
                <div className="flex gap-2 w-full">
                    <Input
                        id="name"
                        type="text"
                        label="Name"
                        placeholder="Enter your name..."
                        style={inputStyle}
                        lableColor="light"
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
                        lableColor="light"
                        style={inputStyle}
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
                <div className='flex justify-between mb-2'>
                    <p className='bg-red px-5 rounded text-light'>{errors.name?.message}</p>
                    <p className='bg-red px-5 rounded text-light'>{errors.username?.message}</p>
                </div>
                <div className="flex gap-2 w-full">
                    <Input
                        id="password"
                        type="password"
                        label="Password"
                        placeholder="Enter your password..."
                        style={inputStyle}
                        lableColor="light"
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
                        lableColor="light"
                        style={inputStyle}
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
                <div className='flex justify-between mb-2'>
                    <p className='bg-red px-5 rounded text-light'>{errors.password?.message}</p>
                    <p className='bg-red px-5 rounded text-light'>{errors.confirmPassword?.message}</p>
                </div>
               
                <div className="flex gap-2 w-full">
                    <Input
                        id="phone"
                        type="tel"
                        label="Phone"
                        placeholder="Enter your phone nummber..."
                        style={inputStyle}
                        lableColor="light"
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
                        lableColor="light"
                        style={inputStyle}
                        inputName={register("email",
                            {
                                required : {
                                    value : true,
                                    message : 'email is required'
                                },
                                pattern: {
                                    value:
                                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "envalid email format"
                                }
                            }
                        )}
                    />
                </div>
                <div className='flex justify-between mb-2'>
                    <p className='bg-red px-5 rounded text-light'>{errors.phone?.message}</p>
                    <p className='bg-red px-5 rounded text-light'>{errors.email?.message}</p>
                </div>
                <div className="flex gap-2 w-full">
                    <Input
                        id="country"
                        type="text"
                        label="Country"
                        placeholder="Enter your country..."
                        style={inputStyle}
                        lableColor="light"
                        inputName={register("country",
                            {
                                required: {
                                    value : true,
                                    message : 'Country is required'
                                }
                            }
                        )}
                    />
                    <Input
                        type="text"
                        placeholder="Enter your city..."
                        id='city'
                        label='City'
                        lableColor="light"
                        style={inputStyle}
                        inputName={register("city",
                            {
                                required: {
                                    value : true,
                                    message : 'City is required'
                                }
                            }
                        )}
                    />
                </div>
                <div className='flex justify-between mb-2'>
                    <p className='bg-red px-5 rounded text-light'>{errors.country?.message}</p>
                    <p className='bg-red px-5 rounded text-light'>{errors.city?.message}</p>
                </div>
                <div className="flex gap-2 w-full">
                    <Input
                        id="adddress"
                        type="text"
                        label="Street and House No"
                        placeholder="Enter complete address..."
                        style={inputStyle}
                        lableColor="light"
                        inputName={register("address",
                            {
                                required : {
                                    value : true,
                                    message :  'address is required'
                                }
                            }
                        )}
                    />
                    <Input
                        type="text"
                        placeholder="Enter Zipcode..."
                        id='zipcode'
                        label='Zip Code'
                        lableColor="light"
                        style={inputStyle}
                        inputName={register("zipcode",
                            {
                               required : {
                                value   : true,
                                message : 'zipcode is required'
                               }
                            }
                        )}
                    />
                </div>
                <div className='flex justify-between mb-2'>
                    <p className='bg-red px-5 rounded text-light'>{errors.address?.message}</p>
                    <p className='bg-red px-5 rounded text-light'>{errors.zipcode?.message}</p>
                </div>
                <h2 className='text-xl mt-1 mb-2 text-start text-light font-medium'>Billing Information</h2>
                <div className={`flex items-center justify-left w-full font-medium text-light`}>
                    <div className='input flex items-center mb-2 w-full mb-2'>
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
                    >Delivary and Billing addresses vary</label>
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
            <DevTool control={control} />
        </div>
    );
}

export default Register;

