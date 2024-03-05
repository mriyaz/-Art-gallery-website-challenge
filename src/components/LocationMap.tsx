import React from 'react'
import { Link } from 'react-router-dom'
import iconArrLeft from '../assets/icon-arrow-left.svg';
import iconLocation from '../assets/icon-location.svg';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Footer from './Footer';

// Correcting the marker icon path issue that can occur with webpack
L.Icon.Default.mergeOptions({
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const LocationMap: React.FC = () => {
  // Map's initial position
  const position: [number, number] = [41.479736, -71.311124];
  return (
    <div className=" min-h-screen w-full h-96 relative bg-black">
      {/* Fixed Back Button on the top */}
      <div className=" absolute top-0 left-24 flex flex-row group z-20">
        <Link to="/" className="bg-custom-brown p-4 flex flex-row justify-center items-center 
            group-hover:bg-black">
          <img src={iconArrLeft} alt="Arrow Button" />
        </Link>
        <Link to="/" className="bg-black text-gray-200 font-custom uppercase px-6 py-4 text-xl font-bold tracking-widest 
            group-hover:bg-custom-brown"
        > Back to home</Link>
      </div>

      {/* Map Display */}
      <MapContainer className='w-full h-full z-10' center={position} zoom={16} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />

        <Marker position={position} icon={new L.Icon({ iconUrl: iconLocation })}>
          <Popup>
            Modern Art Gallery <br /> 99 King Street, Newport, USA.
          </Popup>
        </Marker>
      </MapContainer>

      {/* Location Address */}
      <div className='p-9 bg-black flex flex-col gap-5 md:flex-row md:w-full
      text-gray-200  md:gap-20 md:p-10 w-full lg:p-24'>
        <div className=''>
          <h2 className='text-gray-200 font-custom text-4xl font-extrabold uppercase md:text-5xl lg:text-6xl '>
            OUR LOCATION</h2>
        </div>

        <div className='flex flex-col gap-5 md:w-1/2'>
          <h3 className='text-custom-brown font-custom text-3xl font-extrabold uppercase md:text-4xl lg:text-5xl'>99 KING STREET</h3>
          <p className='text-gray-200 leading-7 text-base md:text-lg lg:text-xl font-light'>
            Newport <br />
            RI 02840 <br />
            United States of America</p>
          <p className='text-gray-200 leading-7 text-base  md:text-lg lg:text-xl font-light'>
            Our newly opened gallery is located near the Edward King House on 99 King Street,
            the Modern Art Gallery is free to all visitors and open seven days a week from 8am to 9pm.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer titleSize='md:w-4/5 lg:w-2/3' bgColor='bg-custom-brown text-white' fontStyle='text-base  md:text-lg lg:text-xl font-light'
        socialStyle='border-black hover:bg-black' />
    </div>
  )
}

export default LocationMap