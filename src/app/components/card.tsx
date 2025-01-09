import Image from 'next/image'
import React from 'react'
const Card = () => {
  return (
    <section className='container px-20 mx-auto flex flex-col md:flex-row items-center sm:pl-1'>

      {/* content */}
      <div className='md:w-2/3 md:pr-10'>
        <h1 className='text-5xl font-bold text-white my-16 text-center underline '>Delicious Menu:</h1>
        <p className='text-white my-4 text-2xl leading-10'>Get ready to indulge in a culinary adventure as we introduce exciting new menu items, coming soon to our restaurant!</p>
        <h1 className='text-4xl font-semibold mt-16 text-center mb-10 underline'>Stay Tuned! Our New Menu Launches Soon</h1>
        <ul>
          <li className='text-white my-4 text-2xl leading-10 tracking-wider mb-9 list-disc sm:tracking-normal sm:w-screen sm:leading-4 '>
            <strong className='text-2xl font-semibold  tracking-widest mr-5 underline underline-offset-4'>Mini Balls:</strong>
            Bite-sized balls filled with cheese, chicken, and vegetables.
          </li>
          <li className='text-white my-4 text-2xl leading-10 tracking-wide mb-9 list-disc'>
            <strong className='text-2xl font-semibold tracking-widest mr-5 underline underline-offset-4'>
            Peshawari Chapli Kebab Burger:
            </strong>
            A twist on the classic chapli kebab, served as a juicy burger patty topped with mint chutney, cucumber raita, and crispy onions.
            </li>
            <li className='text-white my-4 text-2xl leading-10 tracking-wide mb-9 list-disc'>
              <strong className='text-2xl font-semibold tracking-widest mr-5 underline underline-offset-4'>Spicy Chicken Tikka Wrap:</strong>
              A flavorful wrap filled with marinated chicken tikka, crispy onions, cucumber raita, and mint chutney.
            </li>
            <li className='text-white my-4 text-2xl leading-10 tracking-wide mb-9 list-disc'>
              <strong className='text-2xl font-semibold tracking-widest mr-5 underline underline-offset-4'>Balochi Sajji:</strong>
              A traditional Balochi dish made with marinated lamb or chicken, grilled to perfection and served with rice, vegetables, and a side of raita.
            </li>
            <li className='text-white my-4 text-2xl leading-10 tracking-wide mb-9 list-disc'>
              <strong className='text-2xl font-semibold tracking-widest mr-5 underline underline-offset-4'>Karahi: </strong>
              A spicy and flavorful karahi dish, made with tender chicken or mutton, bell peppers, onions, and a blend of spices.

            </li>
        </ul>

      </div>
      {
      /* image */}
      <div className='md:w-1/3 mt-6 md:mt-0'>
        <Image className='w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7 mt-16'
        src="/card/launch.jpeg"
        alt="launch food"
        width={400}
        height={700}
        />

      </div>

    </section>
  )
}

export default Card