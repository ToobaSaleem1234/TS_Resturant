import React from 'react'

const Progressor = () => {
  return (
    <div>
      <div className='flex items-start max-w-screen-lg w-full mx-auto mt-20 sm:items-start'>
        <div className='w-full '>
          <div className='flex items-center w-full'>
            <div className='w-8 h-8 rounded-full shrink-0 mx-[-1px] bg-amber-400 p-2 flex items-center justify-center'>
              <span className='text-base text-black font-bold'>1</span>
            </div>
            <div className='w-full h-1 mx-4 rounded-lg bg-cyan-500'></div>
          </div>
          <div className='mt-2 mr-4'>
            <h3 className='text-base font-bold text-amber-500'>Step:1 Choose Your Dish</h3>
            <p className='text-sm text-white'>Explore our delicious menu and choose your favourite meal...</p>
          </div>
        </div>

        <div className='w-full '>
          <div className='flex items-center w-full'>
            <div className='w-8 h-8 rounded-full shrink-0 mx-[-1px] bg-amber-400 p-2 flex items-center justify-center'>
              <span className='text-base text-black font-bold'>2</span>
            </div>
            <div className='w-full h-1 mx-4 rounded-lg bg-cyan-500'></div>
          </div>
          <div className='mt-2 mr-4'>
            <h3 className='text-base font-bold text-amber-500'>Step:2 Customize Your Order</h3>
            <p className='text-sm text-white'>Tailor your meal according to your amazing taste!</p>
          </div>
        </div>

        <div className='w-full '>
          <div className='flex items-center w-full'>
            <div className='w-8 h-8 rounded-full shrink-0 mx-[-1px] bg-amber-400 p-2 flex items-center justify-center'>
              <span className='text-base text-black font-bold'>3</span>
            </div>
            <div className='w-full h-1 mx-4 rounded-lg bg-cyan-500'></div>
          </div>
          <div className='mt-2 mr-4'>
            <h3 className='text-base font-bold text-amber-500'>Step:3 Place Your Order</h3>
            <p className='text-sm text-white'>Ready to eat? Procees to checkout and complete your order!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Progressor