import React, { useEffect, useState } from 'react';
import { Input } from '../';
import { RxCross2 } from "react-icons/rx";
import { useForm } from 'react-hook-form';
import Alert from '../Alert/Alert';


const SubmitYourDesign = ({ setSubmitDesignOpen }) => {
    const [error, setError] = useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const sendToFriendHandler = (data) => {
        console.log('Form data:', data);
        reset();
        setError({ type: 'success', message: 'Your design is submitted' });
        setTimeout(() => {
            setSubmitDesignOpen(false);
        }, 1000)
    };

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            const firstErrorKey = Object.keys(errors)[0];
            setError({
                message: errors[firstErrorKey]?.message || 'An error occurred',
                type: 'error',
            });
        }
    }, [errors]);

    const onClose = () => {
        setError(null)
    }


    let inputStyle = 'bg-primary text-light p-4 rounded h-10 block border-0 outline-0 w-full focus:border focus:border-light focus:bg-secondary focus:placeholder-light';


    const submitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <>
            {error && <Alert message={error.message} type={error.type} onClose={onClose} />}
            <div className='labelBox rounded bg-secondary text-light absolute bottom-0 md:bottom-auto md:top-0 -right-12 md:right-64 p-3 w-80 max-h-600 overflow-auto scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-secondary scrollbar-track-ButtonBG'>
                <RxCross2
                    onClick={() => setSubmitDesignOpen(false)}
                    className='absolute top-0 right-0 size-6 cursor-pointer md:hidden'
                />
                <h3 className="text-lg font-semibold">SUBMIT YOUR DESIGN</h3>
                <form
                    onSubmit={handleSubmit(sendToFriendHandler)}
                    className="w-full text-light">
                    <div className="mb-2">
                        <Input
                            id="name"
                            type="text"
                            label="Name"
                            placeholder="Type your name"
                            style={inputStyle}
                            labelColor="light"
                            defaultValue=""
                            {...register('name', { required: 'Name is required.' })}
                        />
                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                    </div>
                    <div className="mb-2">
                        <Input
                            type="email"
                            placeholder="Type your email address"
                            id="email "
                            label="Email"
                            labelColor="light"
                            style={inputStyle}
                            defaultValue=""
                            {...register('email', { required: 'Email is required.' })}
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>
                    <div className="mb-2">
                        <Input
                            type="tel"
                            placeholder="Type your phone number"
                            id="phone "
                            label="Phone"
                            labelColor="light"
                            style={inputStyle}
                            {...register('phone', { required: 'Phone is required.' })}
                            />
                            {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                    </div>
                    <div className="mb-2">
                        <Input
                            type="text"
                            placeholder="Type your country name"
                            id="country "
                            label="Country"
                            labelColor="light"
                            style={inputStyle}
                            {...register('country', { required: 'Country is required.' })}
                            />
                            {errors.country && <p className="text-red-500">{errors.country.message}</p>}
                    </div>
                    <div className="mb-2">
                        <Input
                            type="text"
                            placeholder="Type your address"
                            id="address "
                            label="Address"
                            labelColor="light"
                            style={inputStyle}
                            {...register('address', { required: 'Address is required.' })}
                            />
                            {errors.address && <p className="text-red-500">{errors.address.message}</p>}
                    </div>
                    <div className="mb-2">
                        <Input
                            type="text"
                            placeholder="Additional comments"
                            id="comments "
                            label="Comments"
                            labelColor="light"
                            style={inputStyle}
                            {...register('comments', { required: 'Please leave a Comment.' })}
                            />
                            {errors.comments && <p className="text-red-500">{errors.comments.message}</p>}
                    </div>
                    <button className="p-2 mt-2 w-full text-light bg-primary rounded hover:bg-secondary hover:border">SUBMIT YOUR ORDER</button>
                </form>
            </div>
        </>
    );
}

export default React.memo(SubmitYourDesign);
