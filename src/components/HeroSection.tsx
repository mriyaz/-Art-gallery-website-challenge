import React from 'react';
import { Link } from 'react-router-dom';
import iconArrRight from '../assets/icon-arrow-right.svg';
import imgHeroSm from '../assets/mobile/image-hero.jpg';
import imgHeroMd from '../assets/tablet/image-hero.jpg';
import imgHeroLg from '../assets/desktop/image-hero.jpg';

const HeroSection: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6 w-full lg:relative lg:h-screen">
        {/* Hero title */}
        <div className='hidden pl-24 pr-10 animate-slideInTop transition-all duration-1500 ease-out bg-black text-gray-200
        lg:flex flex-col justify-center items-center'>
          <h1 className='font-custom text-8xl font-extrabold uppercase z-20 '>Modern Art Gallery</h1>
        </div>

        {/* Hero Image */}
        <picture className='lg:absolute lg:top-0 lg:left-0 lg:w-full lg:h-screen lg:flex lg:justify-center 
        lg:items-center lg:animate-slideInTopWD lg:delay-1000 lg:transition-all lg:duration-1500 lg:ease-out 
        lg:mix-blend-difference lg:opacity-0'>
          <source
            media="(min-width: 1024px)"  /* Shown only on lg screens */
            srcSet={imgHeroLg} className='w-full h-full object-cover lg:w-auto lg:h-auto '
          />
          <source
            media="(min-width: 768px)"  /* Shown only on md screens */
            srcSet={imgHeroMd} className='w-full h-full object-cover lg:w-auto lg:h-auto '
          />
          <img src={imgHeroSm} alt="Hero Image" className='w-full h-full object-cover lg:w-auto lg:h-auto ' />
        </picture>

        

        {/* Hero Text & Button */}
        <div className='px-4 space-y-6 animate-slideInTop transition-all duration-1500 ease-out       
        lg:px-0 lg:pl-60 lg:pr-24 md:flex md:flex-col md:justify-center lg:items-left lg:gap-14 lg:z-20'>

          <h1 className='font-custom text-6xl font-extrabold uppercase lg:hidden'>Modern Art Gallery</h1>
          <p className='leading-7 text-base lg:text-xl lg:font-normal lg:text-gray-700'>The arts in the collection of the <span>Modern Art Gallery</span> all started from a spark of inspiration. Will these pieces inspire you? <span>Visit us and find out.</span></p>

          <div className="flex flex-row group ">
            <Link to="/location" className="bg-black text-gray-200 font-custom uppercase px-8 py-6 text-xl font-bold tracking-widest 
            group-hover:bg-custom-brown"
            > Our Location</Link>
            <Link to="/location" className="bg-custom-brown p-6 flex flex-row justify-center items-center 
            group-hover:bg-black">
              <img src={iconArrRight} alt="Arrow Button" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection