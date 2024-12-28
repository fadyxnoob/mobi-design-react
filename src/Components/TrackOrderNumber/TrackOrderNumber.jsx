import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Reset, Input } from '../';
import Alert from '../Alert/Alert';
import { useNavigate } from 'react-router-dom';

const TrackOrderNumber = () => {
    const [error, setError] = useState(null);
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        defaultValues: {
            orderNumber: 'MOB201436'  // Default value set here
        }
    });
    const navigate = useNavigate();

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            setError({ type: 'error', message: errors.orderNumber?.message });
        }
    }, [errors]);

    const onSubmit = (data) => {
        console.log('submitted', data);
        navigate('/order-status');
    };

    let inputStyle = ['bg-secondary', 'text-light', 'p-4', 'rounded', 'h-10', 'block', 'border-0', 'outline-0', 'w-full', 'focus:border focus:border-light focus:bg-secondary', 'focus:placeholder-light'].join(' ');

    return (
        <>
            {error && <Alert type={error.type} message={error.message} />}
            <div className='main bg-primary h-screen w-full flex items-center justify-center flex-col'>
                <div className="md:w-2/5 w-full ">
                    <h1 className='text-center mb-10 text-4xl text-light font-medium'>Enter Order Number</h1>
                    <div className='border border-light py-16 px-16 rounded mt-10'>
                        <form className="w-full text-light" onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                type="text"
                                label="Order Number"
                                placeholder="Enter Order Number..."
                                style={inputStyle}
                                labelColor="light"
                                defaultValue= 'MOB201436'
                                inputName={register("orderNumber", {
                                    required: {
                                        value: true,
                                        message: 'Order Number is required'
                                    },
                                    pattern: {
                                        value: /^[A-Z]{3}[0-9]{6}$/,
                                        message: 'Order Number must start with 3 capital letters followed by 6 digits'
                                    },
                                    maxLength: {
                                        value: 9,
                                        message: 'Order Number cannot be more than 9 characters'
                                    },
                                })}
                            />
                            <button type="submit" className="p-2 mt-2 mb-3 w-full text-light bg-secondary rounded hover:bg-secondary hover:border">Track your order</button>
                        </form>
                    </div>

                    <Reset />
                </div>
            </div>
        </>
    );
};

export default TrackOrderNumber;
