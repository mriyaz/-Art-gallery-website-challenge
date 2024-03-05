import React from 'react'
import logo from '../assets/logo-light.svg';
import iconFb from '../assets/icon-facebook.svg';
import iconIg from '../assets/icon-instagram.svg';
import iconX from '../assets/icon-twitter.svg';

interface footerProps {
  titleSize: string,
  bgColor: string,
  fontStyle: string,
  socialStyle: string,
}

const Footer: React.FC<footerProps> = ({ titleSize, bgColor, fontStyle, socialStyle }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-4 ${bgColor} p-9 gap-6 md:gap-2 md:p-5 w-full lg:p-24 lg:grid-cols-3`}>
      <img src={logo} alt="logo" className={titleSize} />
      <p className={`leading-7 ${fontStyle} col-span-2 lg:text-lg lg:col-span-1`}>The Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm. Find us at 99 King Street, Newport, USA.</p>

      <div className="flex gap-5 justify-center items-start lg:justify-end">
        <a href="/" rel="noopener noreferrer">
          <img src={iconFb} alt="Fb icon" className={`w-12 h-12  border-4 rounded-full ${socialStyle} `} />
        </a>
        <a href="/" rel="noopener noreferrer">
          <img src={iconIg} alt="Insta icon" className={`w-12 h-12  border-4 rounded-full ${socialStyle} `} />
        </a>
        <a href="/" rel="noopener noreferrer">
          <img src={iconX} alt="X icon" className={`w-12 h-12  border-4 rounded-full  ${socialStyle} `} />
        </a>
      </div>
    </div>
  )
}

export default Footer