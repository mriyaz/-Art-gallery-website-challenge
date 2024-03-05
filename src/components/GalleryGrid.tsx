import React from 'react';

import imgGrid1Sm from '../assets/mobile/image-grid-1@2x.jpg';
import imgGrid1Md from '../assets/tablet/image-grid-1@2x.jpg';
import imgGrid1Lg from '../assets/desktop/image-grid-1@2x.jpg';

import imgGrid2Sm from '../assets/mobile/image-grid-2@2x.jpg';
import imgGrid2Md from '../assets/tablet/image-grid-2@2x.jpg';
import imgGrid2Lg from '../assets/desktop/image-grid-2@2x.jpg';

import imgGrid3Sm from '../assets/mobile/image-grid-3@2x.jpg';
import imgGrid3Md from '../assets/tablet/image-grid-3@2x.jpg';
import imgGrid3Lg from '../assets/desktop/image-grid-3@2x.jpg';

const GalleryGrid = () => {
  return (

    <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3  px-4 gap-6 md:px-2 lg:px-24 lg:gap-10">

      <div className='space-y-6 bg-gray-100 px-8 py-14 transition-all ease-in-out duration-500 hover:invert md:p-4 md:pr-11
lg:pt-10'>
        <h2 className='font-custom text-5xl font-extrabold uppercase lg:text-6xl'>Your Day At <br />The Gallery</h2>
        <p className='leading-7 text-base hover:text-gray-200 lg:text-xl lg:pr-12'>Wander through our distinct collections and find new about our artists. Dive into the details of their creative process.</p>
      </div>

      <picture className='w-full h-auto transform scale-100 transition-all ease-in-out duration-1000 hover:scale-105  hover:duration-500 hover:saturate-200 object-cover'>
        <source media="(min-width: 1024px)" srcSet={imgGrid1Lg} className='w-full h-full object-cover ' />
        <source media="(min-width: 768px)" srcSet={imgGrid1Md} className='w-full h-full object-cover ' />
        <img src={imgGrid1Sm} alt="Grid1 Image" className='w-full h-full object-cover ' />
      </picture>

      <picture className='w-full  transform scale-100 transition-all ease-in-out duration-1000 hover:scale-105 hover:duration-500 hover:saturate-200 md:row-span-2 md:col-span-1'>
        <source
          media="(min-width: 1024px)"  /* Shown only on lg screens */
          srcSet={imgGrid2Lg} className='w-full h-full object-cover '
        />
        <source
          media="(min-width: 768px)"  /* Shown only on md screens */
          srcSet={imgGrid2Md} className='w-full h-full object-cover '
        />
        <img src={imgGrid2Sm} alt="Grid2 Image" className='w-full h-full object-cover' />
      </picture>

      <picture className='w-full  transform scale-100 transition-all ease-in-out duration-1000 hover:scale-105 over:duration-500 hover:saturate-200 md:col-span-1 object-cover'>
        <source
          media="(min-width: 1024px)"  /* Shown only on lg screens */
          srcSet={imgGrid3Lg} className='w-full h-full object-cover '
        />
        <source
          media="(min-width: 768px)"  /* Shown only on md screens */
          srcSet={imgGrid3Md} className='w-full h-full object-cover '
        />
        <img src={imgGrid3Sm} alt="Grid3 Image" className='w-full h-full object-cover ' />
      </picture>


      <div className='bg-black text-gray-200 px-8 py-14 space-y-6 transition-all ease-in-out duration-500 hover:invert md:col-span-1 lg:px-12'>
        <h2 className='font-custom text-5xl font-extrabold uppercase  lg:text-6xl'>Come & Be Inspired</h2>
        <p className='leading-7 text-base lg:text-xl '>We’re excited to welcome you to our gallery and see how our collections influence you.</p>
      </div>

    </div>

  )
}

export default GalleryGrid