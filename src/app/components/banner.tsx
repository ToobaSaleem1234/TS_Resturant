import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <section>
    <div className='relative overflow-hidden bg-gradient-to-r from-black to-grey-700 font-sans px-6 py-20 mb-7'>
      <div className='absolute inset-0 opacity-50'>
        <Image 
        src="/banner/banner.avif" 
        alt="banner" 
        width={900}
        height={600}
        className='w-full h-full object-cover'/>
      </div>
      <div className='relative z-10 container mx-auto flex flex-col justify-center items-center text-4xl'>
        <h1 className='sm:text-5xl font-bold my-4'>
        Discover Our Menu
        </h1>
        <p className='text-4xl text-center mb-6 max-w-xl mt-4 underline cursor-pointer'>Shop Now For Exclusive Discount!</p>
        <button className='text-2xl font-semibold rounded-full px-5 py-1 shadow-2xl bg-yellow-400 hover:bg-orange-300 text-black mt-6 underline transition duration-300'>
          Exciting Deals Launch at 12:00 A.M!
        </button>
      </div>
    </div>
    </section>
  )
}

export default Banner