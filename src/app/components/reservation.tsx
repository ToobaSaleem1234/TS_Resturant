import React from 'react'

const Reservation = () => {
  return (
    <section className='bg-gradient-to-r from-black to bg-slate-900 py-10'>
        <div className='container mx-auto text-center'>
            <h2 className='text-5xl font-bold my-16 text-white tracking-wider underline cursor-pointer outline-none'>Make a Reservation</h2>
            <form className='mx-4 '>
                <div className='mb-4 text-white'>
                    <input className='w-full py-3 px-6 border border-gray-300 rounded-md text-2xl'
                    type="text" 
                    placeholder='Your Name'
                    required />
                </div>
                <div className='mb-4 text-white'>
                    <input className='w-full py-3 px-6 border border-gray-300 rounded-md text-2xl'
                    type="text" 
                    placeholder='Your Email'
                    required />
                </div>
                <div className='mb-4'>
                    <input className='w-full py-3 px-6 border border-gray-300 rounded-md'
                    type="date" 
                    required />
                </div>
                <div className='mb-4 text-white'>
                    <input className='w-full py-3 px-6 border border-gray-300 rounded-md'
                    type="time" 
                    required />
                </div>
                <div>
                    <button className='bg-orange-400 py-2 px-4 rounded-md hover:bg-orange-300 text-2xl my-7'>Reserved  Your Table</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Reservation