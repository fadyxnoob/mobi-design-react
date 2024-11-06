import React from 'react'
import { Link } from 'react-router-dom'
function Footer({ paraStyle }) {
  return (
    <div className='footer flex items-center justify-center bg-secondary p-2 relative'>
      <Link to="/">
        <h4 className='text-lg font-medium text-light uppercase cursor-pointer'>Design and Developed by :
          <a href="https://wa.me/message/SBDCDBETODETG1"
            className='hover:text-blue underline ml-1'
          >Yasir Mehboob</a> </h4>
      </Link>

      <p className={`${paraStyle}block nsm:hidden absolute right-2 text-light bottom-10 text-end`}>Design your story
        <br />
        in leather
      </p>
      <p className={`${paraStyle} hidden nsm:block absolute right-2 text-light bottom-12 text-end`}>
        Design your story in leather
      </p>

    </div>
  )
}

export default Footer
