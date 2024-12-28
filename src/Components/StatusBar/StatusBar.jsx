import React from 'react';
import { TiStarburst } from "react-icons/ti";
    
const StatusBar = ({ status }) => {

    let pendingColorIs,
        processingColorIs,
        deliveryColorIs

    if (status === 'Processing') {

        pendingColorIs = 'red';
        processingColorIs = 'light'
        deliveryColorIs = 'light'

    } else if (status === 'Shipping') {

        processingColorIs = 'red';
        pendingColorIs = 'light';
        deliveryColorIs = 'light'

    } else {
        
        deliveryColorIs = 'red'
        processingColorIs = 'light'
        pendingColorIs = 'light';

    }

    return (
        <>
            <div className="statusLine bg-secondary h-1 w-full flex items-center justify-between">
                <div className="relative w-1/2 flex flex-col md:ps-10">

                    <TiStarburst className={`size-5 text-${pendingColorIs}  rounded-xl`} />
                    <p className={`absolute top-8 text-${pendingColorIs} font-normal statusText text-lg`}>
                        ORDER PROCESSING
                    </p>

                </div>
                <div className="relative text-left w-1/2 flex flex-col">

                    <TiStarburst className={`size-5 text-${processingColorIs}  rounded-xl`} />
                    <p className={`absolute top-8 text-${processingColorIs} font-normal statusSecondText text-lg`}>
                        SHIPMENT
                    </p>

                </div>
                <div className="relative flex flex-col md:pr-10">

                    <TiStarburst className={`size-5 text-${deliveryColorIs}  rounded-xl`} />
                    <p className={`absolute top-8 text-${deliveryColorIs} font-normal statusLastText text-lg`}>
                        Delivery
                    </p>

                </div>
            </div>
        </>
    );
}

export default StatusBar;
