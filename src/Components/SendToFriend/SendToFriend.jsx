import React, { useEffect, useState } from 'react';
import { Input } from '../';
import { useForm } from 'react-hook-form';
import { RxCross2 } from 'react-icons/rx';
import Alert from '../Alert/Alert';

const SendToFriend = ({ setOpenSendToFriend }) => {
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
        setError({ type: 'success', message: 'Your design has been sent' });
       setTimeout(()=>{
        setOpenSendToFriend(false);
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

    const inputStyle =
        'bg-primary text-light p-4 rounded h-10 block border-0 outline-0 w-full focus:border focus:border-light focus:bg-secondary focus:placeholder-light';

    const onClose = () => {
        setError(null)
    }
    return (
        <>
            {error && <Alert message={error.message} type={error.type} onClose={onClose} />}
            <div className="labelBox rounded bg-secondary text-light p-3 w-80 min-h-600 overflow-auto scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-secondary scrollbar-track-ButtonBG absolute bottom-0 md:bottom-auto md:-top-16 -right-12 md:right-64">
                <RxCross2
                    onClick={() => setOpenSendToFriend(false)}
                    className="absolute top-0 right-0 size-6 cursor-pointer md:hidden"
                />
                <h3 className="text-lg font-semibold">Send this Design to Friend</h3>
                <form
                    onSubmit={handleSubmit(sendToFriendHandler)} // Wrap the handler with handleSubmit
                    className="w-full text-light"
                >
                    <div className="mb-2">
                        <Input
                            type="text"
                            label="Your Name"
                            placeholder="Type your name"
                            style={inputStyle}
                            labelColor="light"
                            defaultValue=""
                            {...register('yourName', { required: 'Your name is required.' })}
                        />
                        {errors.yourName && <p className="text-red-500">{errors.yourName.message}</p>}
                    </div>
                    <div className="mb-2">
                        <Input
                            type="text"
                            placeholder="Type your email address"
                            label="Your Email"
                            labelColor="light"
                            defaultValue=""
                            style={inputStyle}
                            {...register('yourEmail', {
                                required: 'Your email is required.',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Enter a valid email address.',
                                },
                            })}
                        />
                        {errors.yourEmail && <p className="text-red-500">{errors.yourEmail.message}</p>}
                    </div>
                    <div className="mb-4">
                        <Input
                            type="text"
                            label="Friend Name"
                            placeholder="Type your friend name"
                            style={inputStyle}
                            labelColor="light"
                            defaultValue=""
                            {...register('friendName', {
                                required: 'Your friend name is required.',
                            })}
                        />
                        {errors.friendName && <p className="text-red-500">{errors.friendName.message}</p>}
                    </div>
                    <div className="mb-4">
                        <Input
                            type="text"
                            placeholder="Type your friend email address"
                            label="Friend Email"
                            labelColor="light"
                            style={inputStyle}
                            defaultValue=""
                            {...register('friendEmail', {
                                required: 'Your friend email is required.',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Enter a valid email address.',
                                },
                            })}
                        />
                        {errors.friendEmail && (
                            <p className="text-red-500">{errors.friendEmail.message}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <Input
                            type="text"
                            placeholder="Additional Comments"
                            label="Comments"
                            labelColor="light"
                            style={inputStyle}
                            defaultValue=""
                            {...register('Comments', {
                                required: 'Please leave a comment.',
                            })}
                        />
                        {errors.Comments && <p className="text-red-500">{errors.Comments.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className="p-2 mt-2 w-full text-light bg-primary rounded hover:bg-secondary hover:border"
                    >
                        SEND TO FRIEND
                    </button>
                </form>
            </div>
        </>
    );
};

export default SendToFriend;
