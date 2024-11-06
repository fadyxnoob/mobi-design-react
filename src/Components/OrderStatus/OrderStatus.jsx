import React from 'react';
import Topbar from '../Topbar/Topbar';
import Footer from '../Footer/Footer';
import FullScreenIcon from '../../assets/images/full-screen.png'
import StatusBar from '../StatusBar/StatusBar';
import StatusDets from '../StatusDets/StatusDets'


const OrderStatus = () => {

  const color = 'light'
  const title = "DESIGN YOUR OWN SUITS"
  const text = "Go Full Screen"
  const bg = 'secondary'
  const icon = FullScreenIcon

  const status = 'Shipping'

  return (
    <>
      <Topbar textColor={color} bgColor={bg} siteTitle={title} iconText={text} icon={icon} />
      <div className="h-screen w-full bg-primary p-5 flex flex-col">
        <div className="status-bar h-20 flex items-center justify-center w-5/6 mx-auto">
          <StatusBar status={status} />
        </div>
        <div className="status-bar h-auto relative top-32 w-5/6 mx-auto">

         { status === 'Processing' ? (

          <StatusDets
            image='src/assets/images/track.png'
            alt='Processing'
            heading='Estimate Shipping'
            p1='Your order with the ID (MOB201436) is in Processing.'
            p2='Your order will be reached at the destination within (Days 10-15) working days.'

           
          />

          ) : null}

         { status === 'Shipping' ? (
          <StatusDets
            image='src/assets/images/shipment.png'
            alt='Shipment'
            heading='Estimate Shipment'
            p1='Your order with the ID (MOB501436) is in Shipping.'
            p2='Your order will be reached at the destination within (Days 5 - 7 ) working days.'
          />

          ) : null}

         { status === 'Delivery' ? (

          <StatusDets
            image='src/assets/images/dilevry.png'
            alt='Delivery'
            heading='Estimate Delivery'
            p1='Your order with the ID (MOB501436) is on the Way.'
            p2='Your order will be reached at the destination within (Days 1 - 3 ) working days.'
          />

          ) : null}

        </div>
      </div>

      <Footer paraStyle='hidden' />
    </>
  );
}

export default OrderStatus;
