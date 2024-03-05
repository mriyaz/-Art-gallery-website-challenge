import React from 'react'
import Footer from './Footer'
import GalleryGrid from './GalleryGrid'
import HeroSection from './HeroSection'

const Home = () => {
  return (
    <div className=" mx-auto min-h-screen space-y-24 ">
      {/* Hero Section*/}
      <HeroSection />

      {/* Day at the Gallery */}
      <GalleryGrid />

      {/* Footer */}
      <Footer titleSize='md:w-3/4 lg:w-1/2' bgColor='bg-black text-gray-200' fontStyle='text-base' socialStyle='border-custom-brown hover:bg-custom-brown' />
    </div>
  )
}

export default Home