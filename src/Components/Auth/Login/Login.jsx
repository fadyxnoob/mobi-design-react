import React, { useContext } from 'react';
import { Context } from '../../AuthContext/AuthContext';
import {Input} from '../../../Components';
import { FiX } from 'react-icons/fi';
import { useForm} from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

const Login = () => {
    
    const { isLoginModelVisible, closeModelBox } = useContext(Context);  
    if (!isLoginModelVisible) {
        return null;     
    }

    let inputStyle = ['bg-primary', 'text-light', 'p-4', 'rounded', 'h-10', 'block', 'border-0', 'outline-0', 'w-full', 'focus:border focus:border-light focus:bg-secondary', 'focus:placeholder-light'].join(' ');

    const form = useForm();
    const { register, control, handleSubmit, formState } = form;
    const {errors } = formState

    const onSubmit = (data) => {
        console.log('submitted', data);
    };
   
    return (
        <div className="login-card bg-secondary h-96 w-96 flex items-center justify-center gap-2 p-5 rounded flex-col nsm:left-10">

            <div className="absolute top-2 right-2 cursor-pointer text-light" onClick={closeModelBox}>
                <FiX size={30} />
            </div>
            <h1 className="text-3xl text-center text-light font-bold">User Login</h1>
            <form className="w-full text-light" onSubmit={handleSubmit(onSubmit)} noValidate>
                <Input
                    id="email"
                    type="email"
                    label="Email"
                    placeholder="Enter your email..."
                    style={inputStyle}
                    labelColor="light"  
                    inputName={register("email",
                        {
                            required    : {
                                value   : true,
                                message : 'email is required'
                            },
                            pattern   : {
                                value :
                                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Invalid email format"
                            },
                            validate : {
                               notEmail : (fieldValue) => {
                                return (
                                    fieldValue  !== 'admin@gmail.com' || 
                                    'Enter a different email address'
                                )
                               }
                            }
                        }
                       
                    )} 
                />
                 <p className='bg-red px-5 rounded text-light w-fit'>{errors.email?.message}</p>
                <Input
                    type="password"
                    placeholder="Enter your password..."
                    id="password"
                    label="Password"
                    labelColor="light"  
                    style={inputStyle}
                    inputName={register("password",
                        {
                            required : {
                                value : true,
                                message : 'Password is required'
                            }
                        }
                    )} 
                />
                 <p className='bg-red px-5 rounded text-light w-fit'>{errors.password?.message}</p>
                <button className="p-2 mt-2 w-full text-light bg-primary rounded hover:bg-secondary hover:border">Login</button>
            </form>
            <DevTool control={control} />
        </div>
    );
};

export default Login;
