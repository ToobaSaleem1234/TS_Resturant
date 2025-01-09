import React from 'react'
import { GiHamburger } from "react-icons/gi";
import { FaSearch } from 'react-icons/fa';
import { FaBolt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Image from 'next/image';

const Navbar = () => {
  return (
    <div>
      <div className='grid xl:grid-cols-1 grid-cols-1 bg-gradient-to-r from-black to-slate-300'>
        <div className='p-5'>
          <div className='py-3 px-3 rounded-xl border w-full'>
            <div className='flex justify-between items-center'>
              <div className='flex justify-items-center items-center gap-4 '>

                {/* logo */}
                <GiHamburger className='w-9 h-9 text-yellow-400 hover:text-orange-300' />
                <div style={{ position: 'relative' }}>

                  {/* search bar */}
                  <input type="text" placeholder='Search here' className=' text-lg rounded-3xl p-2 outline-none text-md w-[350px] pr-10 hidden lg:block md:block ' />
                  <FaSearch size={25} className='text-yellow-400 hover:text-orange-300 absolute right-9 top-6 transform -translate-y-1/2 hidden lg:block md:block' />
                </div>
              </div>

              {/* sidebar */}
              <div className='flex justify-center items-center gap-4'>
                <FaBolt className='text-yellow-400 hover:text-orange-300 w-5 h-5 hidden lg:block md:block' />
                <p className='text-md text-white hidden lg:block md:block tracking-wider'>Get <span className='text-yellow-400 hover:text-orange-300 underline cursor-pointer'>15% Off </span> on your First Order</p>

                {/* cart icon */}
                <FaShoppingCart className='w-11 h-11 rounded-full ring-2 p-1 ring-yellow-400 relative text-yellow-400 hover:text-orange-300 cursor-pointer' />
                <Image className='inline-block w-11 h-11 rounded-full ring-2 ring-yellow-400 hover:text-orange-300'
                  src="/navbar/tooba.jpg"
                  alt="profile"
                  width={400}
                  height={400} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar