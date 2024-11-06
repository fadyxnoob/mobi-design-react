import React from 'react';
import {Input} from '../';

const SubmitYourDesign = () => {

    let inputStyle = 'bg-primary text-light p-4 rounded h-10 block border-0 outline-0 w-full focus:border focus:border-light focus:bg-secondary focus:placeholder-light';
    return (
        <div className='labelBox rounded bg-secondary text-light absolute right-64 top-0 p-3 w-80 max-h-600 overflow-auto scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-secondary scrollbar-track-ButtonBG'>
            <h3 className="text-lg font-semibold">SUBMIT YOUR DESIGN</h3>
            <form className="w-full text-light" noValidate>
                <Input
                    id="name"
                    type="text"
                    label="Name"
                    placeholder="Type your name"
                    style={inputStyle}
                    labelColor="light"  
                   
                />
                 {/* <p className='bg-red px-5 rounded text-light w-fit'>{errors.email?.message}</p> */}
                 <Input
                    type="email"
                    placeholder="Type your email address"
                    id="email "
                    label=" Email"
                    labelColor="light"  
                    style={inputStyle}
                  
                />
                 {/* <p className='bg-red px-5 rounded text-light w-fit'>{errors.password?.message}</p> */}
                 <Input
                    type="tel"
                    placeholder="Type your phone number"
                    id="phone "
                    label="Phone"
                    labelColor="light"  
                    style={inputStyle}
                  
                />
                 {/* <p className='bg-red px-5 rounded text-light w-fit'>{errors.password?.message}</p> */}
                 <Input
                    type="text"
                    placeholder="Type your country name"
                    id="country "
                    label="Country"
                    labelColor="light"  
                    style={inputStyle}
                  
                />
                 {/* <p className='bg-red px-5 rounded text-light w-fit'>{errors.password?.message}</p> */}
                 <Input
                    type="text"
                    placeholder="Type your address"
                    id="address "
                    label="Address"
                    labelColor="light"  
                    style={inputStyle}
                  
                />
                 {/* <p className='bg-red px-5 rounded text-light w-fit'>{errors.password?.message}</p> */}
                 <Input
                    type="text"
                    placeholder="Additional comments"
                    id="comments "
                    label="Comments"
                    labelColor="light"  
                    style={inputStyle}
                  
                />
                 {/* <p className='bg-red px-5 rounded text-light w-fit'>{errors.password?.message}</p> */}
                <button className="p-2 mt-2 w-full text-light bg-primary rounded hover:bg-secondary hover:border">SUBMIT YOUR ORDER</button>
            </form>
        </div>
    );
}

export default SubmitYourDesign;
