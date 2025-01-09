import Image from 'next/image'
import React from 'react'

const Main = () => {
  return (
    <div className='bg-gradient-to-r from-black to-grey-700'>
                <div className='py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full'>

                        {/* burger */}
                        <div className='col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-grey-700 h-auto md:h-full flex flex-col'>
                            <a href=""
                                className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow'>
                                <Image
                                    src="/homepage/burger.jpg"
                                    alt="pic1"
                                    width={400}
                                    height={400}
                                    className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out' />
                                <div className='absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5 '></div>
                                <h2 className='text-white z-10 text-2xl font-medium absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>Classic Burgers</h2>
                            </a>
                        </div>

                        {/* pasta */}
                        <div className='col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-grey-700 h-auto md:h-full flex flex-col'>
                            <a href=""
                                className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4 '>
                                <Image
                                    src="/homepage/pasta.jpg"
                                    alt="pic2"
                                    width={400}
                                    height={400}
                                    className='absolute inset-0 h-full w-full  object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out' />
                                <div className='absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5 '></div>
                                <h2 className='text-white z-10 text-2xl font-medium absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>Creamy Pasta</h2>
                            </a>
                            {/* masala fries */}
                            <div className='grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 '>
                                <a href=""
                                    className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 '>
                                    <Image
                                        src="/homepage/masala fries.jpg"
                                        alt="pic3"
                                        width={400}
                                    height={400}
                                        className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out' />
                                    <div className='absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5 '>
                                    </div>
                                    <h2 className='text-white z-10 text-2xl font-medium absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>
                                        Masala Fries
                                    </h2>
                                </a>

                                {/* club sandwich */}
                                <a href=""
                                    className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 '>
                                    <Image
                                        src="/homepage/clubsandwich.jpg"
                                        alt="pic4"
                                        width={400}
                                    height={400}
                                        className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out' />
                                    <div className='absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5 '>
                                    </div>
                                    <h2 className='text-white z-10 text-2xl font-medium absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>
                                        Spicy Club Sandwich
                                    </h2>
                                </a>
                            </div>
                        </div>

                        {/* chowmein */}
                        <div className='col-span-2 sm:col-span-2 md:col-span-1 bg-gradient-to-r from-black to-grey-700 h-auto md:h-full flex flex-col'>
                            <a href=""
                                className='group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow'>
                                <Image
                                    src="/homepage/pizza.jpg"
                                    alt="pic5"
                                    width={400}
                                    height={400}
                                    className='absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out' />
                                <div className='absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5 '></div>
                                <h2 className='text-white z-10 text-2xl font-medium absolute top-0 left-0 p-4 xs:text-xl md:text-0xl'>Cheesy Pizza</h2>
                            </a>

                        </div>
                    </div>
                </div >
            </div >
  )
}

export default Main