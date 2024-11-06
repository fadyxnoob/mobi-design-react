import React from 'react';
import {Table, Reset} from '../';

const OrderSummary = () => {

    return (
        <>
            <div className='main bg-primary h-screen w-full flex items-center justify-center'>
                <Table />
                <Reset nsm='nsm:hidden'/>
                <div className="nsm:block hidden">
                    <Reset positionX='right-0' positionY='top-0' size='size-16' />
                </div>
            </div>
        </>
    );
}

export default OrderSummary;
