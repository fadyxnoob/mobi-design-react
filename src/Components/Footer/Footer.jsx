import React from 'react';
import { Link } from 'react-router-dom';

function Footer({ paraStyle }) {
  return (
    <div className="relative flex items-center justify-center bg-secondary p-2">
      <h4 className="text-sm md:text-base lg:text-lg font-medium text-light uppercase cursor-pointer">
        <Link to="/" className="">
          Design and Developed by :
        </Link>
        <a
          href="https://wa.me/message/SBDCDBETODETG1"
          className="hover:text-blue underline ml-1"
        >
          Yasir Mehboob
        </a>
      </h4>

      <p className={`${paraStyle} block nsm:hidden absolute right-2 text-light bottom-10 text-end`}>
        Design your story in leather
      </p>
      <p className={`${paraStyle} hidden nsm:block absolute right-2 text-light bottom-20 text-end`}>
        Design your story in leather
      </p>
    </div>
  );
}

export default Footer;
