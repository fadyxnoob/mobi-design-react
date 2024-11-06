import React from 'react';
import { useForm } from 'react-hook-form';
import {Reset, Input} from '../'

const TrackOrderNumber = () => {
    const form = useForm();
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState

    const onSubmit = (data) => {
        console.log('submitted', data);
        
    };


    let inputStyle = ['bg-secondary', 'text-light', 'p-4', 'rounded', 'h-10', 'block', 'border-0', 'outline-0', 'w-full', 'focus:border focus:border-light focus:bg-secondary', 'focus:placeholder-light'].join(' ');
    return (
        <>
            <div className='main bg-primary h-screen w-full flex items-center justify-center flex-col'>
                <div className="w-2/5 nsm:w-full ">
                    <h1 className='text-center mb-10 text-4xl text-light font-medium'>Enter Order Number</h1>
                    {errors.orderNumber?.message && <p className='bg-red py-2 px-5 rounded text-light w-full mt-5'>{errors.orderNumber?.message}</p>}
                    <div className='border border-light py-16 px-16 rounded mt-10'>
                        <form className="w-full text-light" onSubmit={handleSubmit(onSubmit)} noValidate>
                            <Input
                                id="orderNumber"
                                type="text"
                                label="Email"
                                display='hidden'
                                placeholder="Enter Order Number..."
                                style={inputStyle}
                                labelColor="light"
                                inputName={register("orderNumber", {
                                    required: {
                                        value: true,
                                        message: 'Order Number is required'
                                    },

                                    pattern: {
                                        value: /^[A-Z]{3}[0-9]{6}$/,
                                        message: 'Order Number must start with 3 capital letters followed by 5 digits'
                                    },

                                    // validate: {
                                    //     noOnlyLetters: (value) => !/^[A-Za-z]+$/.test(value) || 'Order Number cannot contain only letters',
                                    //     noOnlyDigits: (value) => !/^\d+$/.test(value) || 'Order Number cannot contain only digits',
                                    // },

                                    maxLength: {
                                        value: 9,
                                        message: 'Order Number cannot be more than 9 characters'
                                    },
                                })}
                            />
                            <button className="p-2 mt-2 mb-3 w-full text-light bg-secondary rounded hover:bg-secondary hover:border">Track your order</button>

                        </form>
                    </div>

                    <Reset />
                </div>
            </div>
        </>
    );
}

export default TrackOrderNumber;
